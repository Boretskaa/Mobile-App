import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text, SafeAreaView, ScrollView, FlatList} from "react-native";
import Article from "./Article";
import axios from "axios";

const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=141664c82e6c480c8da88b763343c8cc', {
            params: {
                category: "technology"
            }
        })
        .then( (response) => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
        })
        .catch(function (error) {
        console.log(error);
        })
        .finally(function () {
  });
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data = {articles}
            renderItem={({item}) => 
                <Article
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                />}
                keyExtractor = {(item) => item.title}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {

    }
})

