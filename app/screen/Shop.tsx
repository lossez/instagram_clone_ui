import { Center, Icon, Input, View, Button, Stack, Flex } from "native-base";
import React from "react";
import { Text, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const ShopScreen = ({ navigation }: { navigation: any }) => {
  const isFocussed = useIsFocused();
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    if (isFocussed) {
      fetch("https://imsea.herokuapp.com/api/1?q=dinosaur")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [isFocussed]);

  // console.log(data);

  return (
    <ScrollView style={styles.container}>
      <Stack space={3} px={4}>
        <Input
          variant={"filled"}
          borderRadius={8}
          placeholder="Search shops"
          size={"lg"}
          py={0.5}
          InputLeftElement={
            <Icon
              as={Ionicons}
              name="search-outline"
              ml={4}
              color="black"
              size={"md"}
            />
          }
        />
        <Button
          variant={"subtle"}
          colorScheme="gray"
          borderRadius={8}
          py={1.5}
          _text={{
            color: "black",
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("ShopVideos")}
        >
          Videos
        </Button>
      </Stack>
      <Flex flexWrap="wrap" direction="row" pt={2}>
        {[...Array(16).keys()].map((item) => (
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            key={item}
            style={{
              width: width / 2 - 4,
              height: width / 2 - 4,
              margin: 2,
            }}
          />
        ))}
      </Flex>
    </ScrollView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
