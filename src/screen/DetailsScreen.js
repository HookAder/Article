import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const DetailsScreen = ({route}) => {
  const {title, imgUrl, content} = route.params;
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>{title}</Text>
      <Image style={{height: 300}} source={{uri: imgUrl}} />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  content: {
    fontSize: 40,
  },
});
