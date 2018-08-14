import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

// Component Imports 
import ListItem from '../ListItem/ListItem';

const placeList = props => {

    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name} 
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}  
                />
            )}
        >
        </FlatList>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
      }
});

export default placeList;