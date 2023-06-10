import React from "react";
import {View, StyleSheet, Text, SafeAreaView, Image} from "react-native";
import moment from "moment";

const Article = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Image */}
            <Image source={{
                url: props.urlToImage
            }} style={styles.image}></Image>

            <View style={{padding: 20}}>
                {/* Title */}
                <Text style={styles.title}>{props.title}</Text>

                {/* Description */}
                <Text style={styles.description} numberOfLines={3}>{props.description}</Text>

                {/* Author, date */}
                <View style={styles.data}>
                    <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text>
                    <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
                </View>

                {/* Source */}
                <View style={{marginTop: 10}}>
                    <Text>Source: <Text style={styles.source}>{props.sourceName}</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Article;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5,
        },
        backgroundColor: "#fff",
        marginTop: 20,
    },
    image: {
        height: 200,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10,
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10,
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    heading: {

    },
    author:{
        fontWeight: "bold",
        fontSize: 15,
    },
    date: {
        fontWeight: "bold",
        color: "#415a77",
        fontSize: 15,
    },
    source:{
        color:"#415a77",
        fontWeight: "bold",
        fontSize: 18
    }
})
