import React from "react";
import NewEditTopicForm from "../components/NewEditTopicForm";

const EditTopicScreen: React.FC<any> = (props) => {
  return <NewEditTopicForm navigation={props} />
};

export default EditTopicScreen