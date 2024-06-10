// ? PLAYGROUND

const container_playground = document.querySelector('.playgroundArea')

// Figures for playing
const square = document.querySelector('.square')
const triangle_1_big = document.querySelector('.triangle_1_big')
const triangle_2_big = document.querySelector('.triangle_2_big')
const triangle_1_medium = document.querySelector('.triangle_1_medium')
const triangle_1_small = document.querySelector('.triangle_1_small')
const triangle_2_small = document.querySelector('.triangle_2_small')
const parallelepiped = document.querySelector('.parallelepiped')

const figures_all = document.querySelectorAll('.figures')


// Containers
const colors_container = document.querySelector('.color_toggle_container')
const shape_selector_container = document.querySelector('.container_selector_shape')
const background_selector_container = document.querySelector('.container_selector_background')
const opacity_selector_container = document.querySelector('.opacity_cutomiser_box')


// Background container
const backgrounds_container = document.querySelector('.backrounds_container')
const btn_background_container_close = document.querySelector('.btn_background_container_close')
const btn_background_container_open = document.querySelector('.background_btn')
const left_bg_preview_box = document.querySelector('.left_bg_container')
const right_bg_preview_box = document.querySelector('.right_bg_container')

btns_box = document.querySelector('.btns_box')




// ? MOBILE MOVEMENT CONTROLLERS

// Mobile controllers
const mobile_arrow_up = document.querySelector('.arrow_up')
const mobile_arrow_down = document.querySelector('.arrow_down')
const mobile_arrow_left = document.querySelector('.arrow_left')
const mobile_arrow_right = document.querySelector('.arrow_right')
const mobile_arrow_rot_left = document.querySelector('.arrow_rot_left')
const mobile_arrow_rot_right = document.querySelector('.arrow_rot_right')

// Mobile controllers movement speed
const mobile_speed_slow = document.querySelector('.mobile_key_slow')
const mobile_speed_medium = document.querySelector('.mobile_key_medium')
const mobile_speed_fast = document.querySelector('.mobile_key_fast')






// ? SETTINGS PANEL

// Create shape
const shape_selector = document.getElementById('target_shapes')

// Scaling
const btn_085x = document.querySelector('.btn_08x')
const btn_1x = document.querySelector('.btn_1x')

// Background image
const input_opacity = document.querySelector('.input_opacity')
const slider = document.getElementById('opacitySlider');

// Multimovements
const checkbox_multimovements = document.querySelector('.multumovements_checkbox')
const checkbox_select_all = document.querySelector('.select_all_checkbox')







// ? MENU

// Menu
const menu_container = document.querySelector('.menu_container')
const btn_menu_close = document.querySelector('.btn_menu_close')
const btn_menu_open = document.querySelector('.btn_menu_open')

// Inputs
const input_mov = document.querySelector('.input_mov')
const input_rot = document.querySelector('.input_rot')

// Save
const btn_save = document.querySelector('.btn_grab')
const save_obj = document.querySelector('.temp_save_figure_obj_container')

// Reset
const btn_reset = document.querySelector('.btn_reset')

// Custom background input
const input_bg_url = document.querySelector('.input_bg_url')

// Generate random shape
const btn_gen_rand_shape = document.querySelector('.btn_generate')

