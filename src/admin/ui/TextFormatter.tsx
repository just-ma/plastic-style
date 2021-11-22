import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor, EditorState } from 'draft-js';

const Page = styled.div`
  padding: 50px;
`;

export default function TextFormatter(): React.ReactElement {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  return (
    <Page>
      hello there
      <Editor editorState={editorState} onChange={setEditorState} />
    </Page>
  );
}
