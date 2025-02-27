import { useState, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem("editorContent");
    return savedContent
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      : EditorState.createEmpty();
  });

  useEffect(() => {
    localStorage.setItem("editorContent", JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);

  return (
    <Paper elevation={3} style={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h5">Rich Text Editor</Typography>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
      />
    </Paper>
  );
};

export default RichTextEditor;
