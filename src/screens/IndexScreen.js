import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <>
           <FlatList
           data={state}
           keyExtractor={(blogPost) => blogPost.title}
           renderItem={({item}) => {return (
               <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id})}>
                   <View style={styles.row}>
                       <Text style={styles.title}>{item.title}</Text>
                       <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                           <Feather name="trash" style={styles.icon} />
                        </TouchableOpacity>
                    </View> 
               </TouchableOpacity>
           )}}
           />
        </>
    );
};

const addPost = (navigation) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <MaterialIcons name="post-add" style={styles.addpost} />
        </TouchableOpacity>
    )
};


IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {return addPost(navigation)}
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    addpost: {
        marginRight: 10,
        fontSize: 35
    }
});

export default  IndexScreen;