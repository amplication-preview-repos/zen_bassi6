import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="Post" source="post" />
      </SimpleForm>
    </Edit>
  );
};
