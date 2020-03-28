/**
 * Created by ljunb on 16/12/1.
 */
import React, { Component } from 'react'
import {
    ActivityIndicator,
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class LoadMoreFooter extends Component {
    static propTypes = {
        isNoMore: React.PropTypes.bool,
    }

    static defaultProps = {
        isNoMore: false
    }

    render() {
        const {isNoMore} = this.props
        const title = isNoMore ? '- No more data-':' Loading more data ...'

        return (
            <View style={styles.loadingContainer}>
                {!isNoMore && <ActivityIndicator />}
                <Text style={styles.title}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 14,
        marginLeft: 5,
        color: 'gray'
    }
})