import { themeType } from "./themeTypes";
import { Color } from "./Colors";
import { Theme } from "./theme";

export const THEMES: Record<themeType, Theme> = {
    light: {
        '--primary-background-color': Color.light_primary,
        '--secondary-background-color': Color.light_secondary,
        '--color-bold': Color.light_color_bold,
        '--color-light': Color.light_color_fade,
        '--active-background-color': Color.light_active,
        '--item-background-color': Color.light_item_color,
        '--feature-background-color': Color.light_feature,
        '--logo-color': Color.light_logo_color,
        '--background-fade-color':Color.light_background_fade
    },
    dark: {
        '--primary-background-color': Color.dark_primary,
        '--secondary-background-color': Color.dark_secondary,
        '--color-bold': Color.dark_color_bold,
        '--color-light': Color.dark_color_fade,
        '--active-background-color': Color.dark_active,
        '--item-background-color': Color.dark_item_color,
        '--feature-background-color': Color.dark_feature,
        '--logo-color': Color.dark_logo_color,
        '--background-fade-color':Color.dark_background_fade
    }
}