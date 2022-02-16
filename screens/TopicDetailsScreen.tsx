import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store";
import {topicsAction} from "../store/topics/topic-slice";
import TopicDetails from "../components/TopicDetails";

const TopicDetailsScreen: React.FC<any> = (props) => {
  const currentTopic = useAppSelector((state) => state.topicState.currentTopic);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(topicsAction.getTopicById({id: props.route.params}))
  }, [dispatch])

  return <TopicDetails {...currentTopic} navigation={props} />
};

export default TopicDetailsScreen;
