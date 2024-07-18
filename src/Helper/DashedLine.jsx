import React, { useMemo, useState, useCallback, useRef } from 'react';
import { View, StyleSheet } from 'react-native';

const DashedLine = ({
    axis = 'horizontal',
    dashGap = 2,
    dashLength = 4,
    dashThickness = 2,
    dashColor = '#000',
    dashStyle,
    style,
}) => {
    const [lineLength, setLineLength] = useState(0);
    const lineLengthRef = useRef(0);
    const isRow = axis === 'horizontal';
    const numOfDashes = useMemo(() => Math.ceil(lineLength / (dashGap + dashLength)), [lineLength, dashGap, dashLength]);

    const dashStyles = useMemo(() => ({
        width: isRow ? dashLength : dashThickness,
        height: isRow ? dashThickness : dashLength,
        marginRight: isRow ? dashGap : 0,
        marginBottom: isRow ? 0 : dashGap,
        backgroundColor: dashColor,
    }), [dashColor, dashGap, dashLength, dashThickness, isRow]);

    const onLayout = useCallback((e) => {
        const newLength = isRow ? e.nativeEvent.layout.width : e.nativeEvent.layout.height;
        if (newLength !== lineLengthRef.current) {
            lineLengthRef.current = newLength;
            setLineLength(newLength);
        }
    }, [isRow]);

    return (
        <View
            onLayout={onLayout}
            style={[style, isRow ? styles.row : styles.column]}
        >
            {Array.from({ length: numOfDashes }, (_, i) => (
                <View key={i} style={[dashStyles, dashStyle]} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    row: { flexDirection: 'row' },
    column: { flexDirection: 'column' },
});

export default DashedLine;
