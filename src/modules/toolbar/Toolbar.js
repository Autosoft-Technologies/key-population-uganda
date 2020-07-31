import { Color } from '../../constants/Colors';
import LeftElement from './LeftElement.react';
import CenterElement from './CenterElement.react';
import RightElement from './RightElement.react';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: Color.mainColor,
        elevation: 4,
    },
    statusBar: {
        height: 24,
    },
    toolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        height: 56,
        flex: 1,
    },
});

export default class Toolbar extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <View style={styles.toolbarContainer}>
                    <LeftElement />
                    <CenterElement title="Animation" />
                    <RightElement />
                </View>
            </View>
        );
    }
}