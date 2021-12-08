import React, { useCallback, useState, useEffect, useRef, LegacyRef, useMemo } from 'react';
import styled from 'styled-components';
import { ContentState, DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js';
import { Options, stateToHTML } from 'draft-js-export-html';

const HTMLOptions: Options = {
  defaultBlockTag: 'span',
  inlineStyles: { BOLD: { element: 'b' } },
};

const formatHTML = (content: ContentState): string => {
  const html = stateToHTML(content, HTMLOptions)
    .replace(/<span>|<br>/g, '')
    .replace(/<\/span>\s*/g, '\\n')
    .slice(1);

  return `\`${html.slice(0, html.length - 2)}\``;
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

const EditorContainer = styled.div`
  padding: 10px;
  border: 1px solid black;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;
`;

const HTMLContainer = styled.div`
  user-select: all;
`;

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

  return (
    <Page>
      <ButtonsContainer>
        <BoldButton onClick={handleBoldClick}>B</BoldButton>
        <ItalicButton onClick={handleItalicClick}>I</ItalicButton>
      </ButtonsContainer>
      <EditorContainer>
        <Editor
          ref={ref as LegacyRef<Editor>}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </EditorContainer>
      <HTMLContainer>{html}</HTMLContainer>
    </Page>
  );
}
