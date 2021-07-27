import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);

    const [content, setContent] = useState(initialValues.content);
    
    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input} />
            <Button 
            title="Save Blog Post" 
            onPress={() => onSubmit(title, content)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black', 
        marginBottom: 15,
        marginTop: 0,
        padding: 5,
        margin: 15
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 15
    }
});

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

export default BlogPostForm;