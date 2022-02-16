import React, {useEffect} from "react";
import TopicListItem from "../components/TopicListItem.";
import {useAppDispatch, useAppSelector} from "../store";
import {topicsAction} from "../store/topics/topic-slice";
import {TopicsModel} from "../shared/models/topics/topics-model";

const TopicListScreen: React.FC<any> = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const frontList = useAppSelector((state) => state.topicState.frontTopicList);
  const backList = useAppSelector((state) => state.topicState.backTopicList);
  const uiList = useAppSelector((state) => state.topicState.uiTopicList);
  const devList = useAppSelector((state) => state.topicState.devTopicList);
  let currentList: TopicsModel[] = [];
  let currentCategory: string;

  switch (route.name) {
    case 'Front-end Topics':
      currentList = frontList;
      currentCategory = 'fe';
      break;
    case 'Back-end Topics':
      currentList = backList;
      currentCategory = 'be';
      break;
    case 'UI/UX Topics':
      currentList = uiList;
      currentCategory = 'ui';
      break;
    case 'Dev-Ops Topics':
      currentList = devList;
      currentCategory = 'dev';
      break;
  }

  useEffect(() => {
    dispatch(topicsAction.getTopicList({type: currentCategory}))
  }, [dispatch])

  return <TopicListItem data={currentList} navigation={navigation} route="Details"/>
};

export default TopicListScreen;