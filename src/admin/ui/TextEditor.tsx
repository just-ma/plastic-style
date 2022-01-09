import React, { useCallback, useState, useEffect, useRef, LegacyRef, useMemo } from 'react';
import styled from 'styled-components';
import {
  ContentState,
  DraftHandleValue,
  Editor,
  EditorState,
  RichUtils,
  CompositeDecorator,
  ContentBlock,
} from 'draft-js';
import { Options, stateToHTML } from 'draft-js-export-html';

import HTMLString from '../../common/ui/HTMLString';

const HTMLOptions: Options = {
  defaultBlockTag: 'span',
  inlineStyles: { BOLD: { element: 'b' } },
};

const formatHTML = (content: ContentState): string => {
  const html = stateToHTML(content, HTMLOptions)
    .replace(/<span>|<br>/g, '')
    .replace(/<\/span>\s*/g, '\\n');

  return html.slice(0, html.length - 2);
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 50px;
  overflow-y: auto;
  box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const BoldButton = styled.button`
  font-weight: 700;
`;

const ItalicButton = styled.button`
  font-style: italic;
`;

const TextContainer = styled.div<{ editable?: boolean }>`
  padding: 10px;
  margin-bottom: 20px;
  min-height: 20px;
  border-radius: 5px;
  ${({ editable }) => (editable ? 'border: 1px solid black' : 'background-color: #d9d9d9')};
`;

const HTMLContainer = styled.div`
  user-select: all;
`;

const LinkContainer = styled.a`
  color: blue;
`;

type LinkProps = {
  entityKey: string;
  contentState: ContentState;
  children: React.ReactNode;
};

const Link = ({ entityKey, contentState, children }: LinkProps): React.ReactElement => {
  const { url } = contentState.getEntity(entityKey).getData();

  return (
    <LinkContainer href={url} target="_blank" rel="noreferrer">
      {children}
    </LinkContainer>
  );
};

const findLinkEntities = (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState,
): void => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();

    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

export const createLinkDecorator = (): CompositeDecorator =>
  new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);

export default function TextEditor(): React.ReactElement {
  const ref = useRef<Editor>();

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleFocus = useCallback((): void => {
    setTimeout(() => ref.current?.focus(), 0);
  }, [ref.current]);

  useEffect((): void => {
    handleFocus();
  }, []);

  const html = useMemo((): string => {
    return formatHTML(editorState.getCurrentContent());
  }, [editorState]);

  const handleKeyCommand = useCallback((command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  }, []);

  const handleBoldClick = useCallback((): void => {
    setEditorState((prev) => RichUtils.toggleInlineStyle(prev, 'BOLD'));
    handleFocus();
  }, [handleFocus]);

  const handleItalicClick = useCallback((): void => {
    setEditorState((prev) => RichUtils.toggleInlineStyle(prev, 'ITALIC'));
    handleFocus();
  }, [handleFocus]);

  const handleLinkClick = useCallback((): void => {
    const selection = editorState.getSelection();
    if (selection.getStartOffset() === selection.getEndOffset()) {
      window.alert('make a selection first');
      return;
    }

    const linkUrl = window.prompt('Add link (https://www.example.com)');
    const underlinedState = RichUtils.toggleInlineStyle(editorState, 'UNDERLINE');
    const contentStateWithEntity = editorState
      .getCurrentContent()
      .createEntity('LINK', 'MUTABLE', { url: linkUrl, target: '_blank', rel: 'noreferrer' });

    setEditorState(
      RichUtils.toggleLink(
        underlinedState,
        underlinedState.getSelection(),
        contentStateWithEntity.getLastCreatedEntityKey(),
      ),
    );
    handleFocus();
  }, [handleFocus, editorState]);

  return (
    <Page>
      editor:
      <ButtonsContainer>
        <BoldButton onClick={handleBoldClick}>B</BoldButton>
        <ItalicButton onClick={handleItalicClick}>I</ItalicButton>
        <button onClick={handleLinkClick}>LINK</button>
      </ButtonsContainer>
      <TextContainer editable>
        <Editor
          ref={ref as LegacyRef<Editor>}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </TextContainer>
      <br />
      code to copy:
      <TextContainer>
        <HTMLContainer>`{html}`</HTMLContainer>
      </TextContainer>
      <br />
      website text display:
      <TextContainer>
        <HTMLString>{html}</HTMLString>
      </TextContainer>
    </Page>
  );
}
