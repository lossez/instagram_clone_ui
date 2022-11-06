import { Button, HStack, Text, VStack } from 'native-base'
import React from 'react'

type Children = {
    text: string
}

export const ReadMore = ({ text }: Children) => {
    const [isReadMore, setIsReadMore] = React.useState(true)
    const toggle = () => {
        setIsReadMore(!isReadMore)
    }

    return (
        <Text>
            {isReadMore ? text?.slice(0, 80) : text}
            {text?.length > 80 ? (<Text onPress={toggle} color='gray.500' >{isReadMore ? " ...more" : " show less"}</Text>) : text}

        </Text>
    )
}