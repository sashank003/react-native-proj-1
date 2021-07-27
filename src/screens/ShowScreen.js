import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Foundation } from '@expo/vector-icons'; 

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
};
const edit = (navigation) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <Foundation name="page-edit" style={styles.edit} />
        </TouchableOpacity>
    )
}
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {return edit(navigation)}
    }
}

const styles = StyleSheet.create({
    edit: {
        marginRight: 10,
        fontSize: 35
    }
});

export default ShowScreen;