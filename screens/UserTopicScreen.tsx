import TopicListItem from "../components/TopicListItem.";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store";
import {topicsAction} from "../store/topics/topic-slice";
import {Box, Center, Text} from "native-base";

const UserTopicScreen: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => state.topicState.userTopicList);
  const user = useAppSelector((state) => state.userState.user);

  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      dispatch(topicsAction.getUserTopicList({authorId: user.id}))
    });
  }, [dispatch, user.id])

  return (
    userList.length ?
      <TopicListItem data={userList} navigation={props.navigation} route='My Details'/> :
      <Center flex={1}>
        <Box alignItems="center">
          <Text>You dont have any active topics</Text>
        </Box>
      </Center>
  )
}

export default UserTopicScreen;