import React from 'react'
import {View, ImageBackground} from "react-native";

// components
class VideoThumbnail extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, width: null, height: 200 }}>
                    <ImageBackground
                        style={{ flex: 1, width: null, height: 200 }}
                        source={{ uri: this.props.thumbnailUrl }}
                    />
                    <VideoLength
                        style={{ position: "absolute", right: 20, top: -35, backgroundColor: "black", color: "white",
                            borderRadius: 3, paddingHorizontal: 7, textAlign: "right", overflow: "hidden",
                        }}
                        videoLength={this.props.videoLength} />
                </View>
            </View>
        );
    }
}

class VideoLength extends React.Component {
    render() {
        return (
            <View>
                <Text style={this.props.style}>{this.props.videoLength}</Text>
            </View>
        )
    }
}

class VideoInfo extends React.Component {
    render() {
        return (
            <View style={{ paddingHorizontal: 15, paddingTop: 15, paddingBottom: 15, flexDirection: 'row', marginTop: 5 }}>
                <View style={{ marginHorizontal: 10 }}>
                    <Image
                        style={{ width: 40, height: 40, borderRadius: 20, margin: 0 }}
                        source={{ uri: this.props.channelAvatarImage }} />
                </View>
                <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
                    <Text style={{ fontWeight: '600', fontSize: 18, color: '#fff', flex: 1, flexWrap: 'wrap' }}>
                        {this.props.videoTitle}
                    </Text>
                    <Text style={{ fontSize: 14, marginTop: 6, color: '#4d4d4d' }}>
                        {
                            this.props.channelName
                        } · {
                        this.props.videoInfo.description.views
                    } · {
                        this.props.videoInfo.description.uploadDate
                    }
                    </Text>
                </View>
                <View>
                    <Icon name='more-vert' size={25} color={'#3e3e3e'} />
                </View>
            </View>
        )
    }
}

class YouTubeVideo extends React.Component {
    render() {
        return (
            <View>
                <VideoThumbnail
                    thumbnailUrl={this.props.videoInfo.videoThumbnailUrl}
                    videoLength={this.props.videoInfo.videoLength}
                />
                <VideoInfo
                    videoTitle={this.props.videoInfo.title}
                    videoInfo={this.props.videoInfo}
                    channelName={this.props.channelInfo.channelName}
                    channelAvatarImage={this.props.channelInfo.channelAvatarImage} />
            </View>
        )
    }
}

export default YouTubeVideo;
