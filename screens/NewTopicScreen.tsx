import React from "react";
import NewEditTopicForm from "../components/NewEditTopicForm";

const NewTopicScreen: React.FC<any> = (props) => {
  return <NewEditTopicForm navigation={props} />
};


export default NewTopicScreen