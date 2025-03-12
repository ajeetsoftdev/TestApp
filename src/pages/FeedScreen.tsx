

import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import Loader from './Loader';


const FeedScreen = () => {

    const [loading, setLoading] = useState(false);
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        fetchFeedData();
    }, []);

    const fetchFeedData = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                'https://social.circuitchat.io/api/feed?profile=67c14a5cc3ca32727761ca6f&lastId=&limit=15',
                {
                    method: 'GET',
                    headers: {
                        'client-id': '66ea7609c990886923861202',
                        'client-secret': '653f1e94-fa6d-4d10-932e-e1030c5dcb1c',
                        'Cookie':
                            'session=s%3A8tq6BbGo7I5htwLfGzEP1mKtI7wI8Q73.0sdlCnMjLKza9A9v34qMeQ8ucNjr4J34yM7ecsR6fAk; session=s%3AR4_vuXeIdyLLty0v2Z58n4C5oJFX4Odx.zFAkgzG4Nftwkn3QOq3dUR9NOoPT5DwxzdkdT3Hfx0k',
                    },
                }
            );
            const data = await response.json();
            setFeedData(data.feeds || []);
            setLoading(false)
        } catch (error) {
            console.error('API Error:', error);
            setLoading(false)
        }
    };

    const headings = [
        { id: 1, name: "Food" },
        { id: 2, name: "Travel" },
        { id: 3, name: "Shoping" },
        { id: 4, name: "Science" },
        { id: 5, name: "Tour" },
    ]

    const stories = [
        { id: 1, image: "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=zeshqUp2X2mSAlURtrcyI-FZumcAiv-1corvRhT-qFo=" },
        { id: 2, image: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=JecbHiBxM7ZzAADbPkqJuvNoCs3uO2VrK2LmrSpm3Ek=" },
        { id: 3, image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=2048x2048&w=is&k=20&c=tU5X1sJJ9sIcqthiw5RO388RhKNllo0ZF82LPitfXgU=" },
        { id: 4, image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=2048x2048&w=is&k=20&c=DIrQNh74utZ0e_1sqZ-M47jIqXc34ThnswFTm1dNiUI=" },
        { id: 5, image: "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg" },
    ]

    const renderItem = ({ item }: any) => (
        <View style={styles.postContainer}>
            <View style={styles.userInfo}>
                <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
                <Text style={styles.username}>{item.user.name}</Text>
            </View>

            <Text style={styles.postText}>{item.text}</Text>

            {/* Media Check (Video / Image) */}
            {item.files.length > 0 && (
                item.files[0].type.includes('video') ? (
                    <View style={{ borderRadius: 20 }}>
                        <Video
                            source={{ uri: item.files[0].url }}
                            style={styles.videoPlayer}
                            controls
                            resizeMode="contain"
                        />
                    </View>
                ) : (
                    <Image source={{ uri: item.files[0].url }} style={styles.postImage} />
                )
            )}

            <View style={styles.postActions}>
                <Text style={styles.icon}>❤️ {item.reactions.length}</Text>
                <Text style={styles.icon}>🔄 {item.share} Shares</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Ankita</Text>
            </View>

            {/* Stories */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyContainer}>
                {stories.map((item, index) => (
                    <Image key={index} source={{ uri: item?.image }} style={styles.storyAvatar} />
                ))}
            </ScrollView>

            {/* Text */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', padding: 10, height: 70, }}>
                {headings.map((ele, index) => (
                    <View key={index}>
                        {ele?.id === 1 ?
                            <Text style={{ color: '#C6329B', fontWeight: 'bold', fontSize: 20 }}>#{ele.name}   </Text>
                            :
                            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>#{ele.name}   </Text>
                        }
                    </View>
                ))}
            </ScrollView>

            {/* Feed */}
            <FlatList
                data={feedData}
                renderItem={renderItem}
                keyExtractor={(item: any) => item._id}
            />

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity><Text style={[styles.bottomIcon, { color: '#C6329B' }]}><Text style={{ fontSize: 25 }}>🔥</Text>{'\nFeed'}</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.bottomIcon}><Text style={{ fontSize: 25 }}>👥</Text>{'\nFriends'}</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.bottomIcon}><Text style={{ fontSize: 25 }}>💬</Text>{'\nChats'}</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.bottomIcon}><Text style={{ fontSize: 25 }}>⚙️</Text>{'\nSettings'}</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.bottomIcon}><Text style={{ fontSize: 25 }}>👤</Text>{'\nProfile'}</Text></TouchableOpacity>
            </View>
            <Loader visible={loading} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { padding: 15, flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#ddd' },
    headerText: { fontSize: 18, fontWeight: 'bold' },
    storyContainer: { flexDirection: 'row', padding: 10, height: 135, },
    storyAvatar: { width: 70, height: 70, borderRadius: 50, marginRight: 10 },
    postContainer: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
    userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    username: { fontWeight: 'bold' },
    postText: { marginVertical: 5 },
    postImage: { width: '100%', height: 200, borderRadius: 10, marginVertical: 5 },
    postActions: { flexDirection: 'row', justifyContent: 'space-between', padding: 5 },
    icon: { fontSize: 16, paddingHorizontal: 10 },
    bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1, borderColor: '#ddd' },
    bottomIcon: { fontSize: 16, paddingHorizontal: 10, textAlign: 'center', fontWeight: '500' },
    videoPlayer: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        backgroundColor: '#fff',

    },

});

export default FeedScreen;