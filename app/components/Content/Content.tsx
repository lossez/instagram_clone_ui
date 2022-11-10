import { Actionsheet, Avatar, HStack, Icon, Text, useDisclose } from 'native-base'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image, Pressable, ScrollView, TouchableOpacity, View } from 'react-native'
import CommentIcon from '../Icons/CommentIcon'
import PlaneIcon from '../Icons/PlaneIcon'
import BookmarkIcon from '../Icons/BookmarkIcon'
import HearthIcon from '../Icons/HearthIcon'
import { ReadMore } from '../ReadMore/ReadMore'
import moment from 'moment'
type Post = {
    username: string,
    description: string,
    uri: string,
    publishedAt: Date
}
const usernameValue = {
    username: 'name',
}



export const Content = ({ username, description, uri, publishedAt }: Post) => {
    const { isOpen, onOpen, onClose } = useDisclose();
    const [isLike, setIsLike] = useState(false)

    const toggleLike = () => {
        setIsLike(!isLike)
    }

    return (
        <View style={{
            paddingBottom: 10
        }}>
            <Actionsheet isOpen={isOpen} onClose={onClose} >
                <Actionsheet.Content>
                    <Actionsheet.Item>1</Actionsheet.Item>
                    <Actionsheet.Item>1</Actionsheet.Item>
                    <Actionsheet.Item>1</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>

            <HStack justifyContent={'space-between'} px="4" pb={3} alignItems={'center'}>
                <HStack space={3} alignItems="center">
                    <Avatar bg="indigo.500" size={30} source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }} />
                    <Text bold>{username}</Text>
                </HStack>
                <Ionicons name="ellipsis-horizontal" size={22} color="black" />
            </HStack>
            {/* <TouchableOpacity onPress={toggleLike}> */}
            <Image source={{
                uri: uri ? uri : "https://via.placeholder.com/300"
            }}
                style={{
                    width: '100%',
                    minHeight: 300,
                    maxHeight: 375
                }}
            />
            {/* </TouchableOpacity> */}
            <HStack justifyContent={'space-between'} px='4' py={3}>
                <HStack space={2}>
                    <TouchableOpacity onPress={toggleLike}>
                        {isLike ? <Icon as={Ionicons} name="heart" size={6} color="#fe251b" /> : <HearthIcon />}

                    </TouchableOpacity>
                    <CommentIcon />
                    <Pressable onPress={onOpen}>
                        <PlaneIcon />
                    </Pressable>
                </HStack>
                <BookmarkIcon />
            </HStack>
            <View style={{
                paddingLeft: 20
            }}>
                <Text>
                    <Text bold>{username} </Text>
                    <ReadMore text={description} />
                </Text>
                <Text color={'gray.400'}>View All 289 comments</Text>
                <HStack space={2} alignItems="center" py={2}>
                    <Avatar bg="indigo.500" size={30} source={{
                        uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    }} />
                    <Text color={'gray.400'}>Add a comments</Text>
                </HStack>
                <Text fontSize={'xs'} color={'gray.400'}>{moment(publishedAt).fromNow()}</Text>
            </View>
        </View>
    )
}