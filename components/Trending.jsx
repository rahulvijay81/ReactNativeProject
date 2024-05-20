import { useState } from "react";
import { Text, FlatList } from "react-native";
import * as Animatable from "react-native-animatable"


const TrendingItem = () => {
  return (
    <Animatable.View>

    </Animatable.View>
  )
}

const Trending = ({ posts }) => {
  const [activeItem , setActiveItem] = useState(posts[0])

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
       <TrendingItem activeItem />
      )}
      horizontal
    />
  );
};

export default Trending;
