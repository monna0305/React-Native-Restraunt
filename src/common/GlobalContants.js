/**
 * Created by ljunb on 2017/2/25.
 */
import { Dimensions, Platform, PixelRatio } from 'react-native'

global.gScreen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    navBarHeight: __IOS__ ? 64 : 50,
    navBarPaddingTop: __IOS__ ? 20 : 0,
    onePix: 1 / PixelRatio.get(),
}

global.gColors = {
    theme: 'rgb(217, 51, 58)',
    background: '#f5f5f5',
    border: '#d5d5d5',
    healthGreen: 'rgb(142, 213, 7)',
    healthYellow: 'rgb(254, 210, 10)',
    healthRed: 'rgb(251, 25, 8)'
}

global.gSortTypeUnitMapper = {
    'calory': 'Kcal',
     'protein': 'gram',
     'fat': 'gram',
     'carbohydrate': 'gram',
     'fiber_dietary': 'gram',
     'vitamin_a': 'IU',
     'vitamin_c': 'mg',
     'vitamin_e': 'mg',
     'carotene': 'mg',
     'thiamine': 'mg',
     'lactoflavin': 'mg',
     'niacin': 'mg',
     'cholesterol': 'mg',
     'magnesium': 'mg',
     'calcium': 'mg',
     'iron': 'mg',
     'zinc': 'mg',
     'copper': 'mg',
     'manganese': 'mg',
     'kalium': 'mg',
     'phosphor': 'mg',
     'natrium': 'mg',
     'selenium': 'mg',
     'iodine': 'mg'
}