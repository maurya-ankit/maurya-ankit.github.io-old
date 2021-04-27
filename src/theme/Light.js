
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import palette from './palette';
import typography from './typography'
const Light = responsiveFontSizes(
    createMuiTheme({
        palette,
        layout: {
            contentWidth: 1140,
        },
        typography,
        zIndex: {
            appBar: 1200,
            drawer: 1100,
        },
        overrides: {
            MuiButton: {
                containedSecondary: {
                    color: 'white',
                },
            },
        },
    }),
);

export default Light;
