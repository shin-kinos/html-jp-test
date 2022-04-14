
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
	pub fn alert( s : &str );
}

#[wasm_bindgen]
pub fn show_alert( name: &str ) {
	alert( &format!( "{}", name ) );
}

#[wasm_bindgen]
pub fn input( x : i32 ) -> i32 {
	x
}

#[wasm_bindgen]
pub fn twice( x : i32 ) -> i32 {
	x * 2
}

#[wasm_bindgen]
pub fn add( x1 : i32, x2 : i32 ) -> i32 {
	x1 + x2 
}

#[wasm_bindgen]
pub fn mul( x1 : i32, x2 : i32 ) -> i32 {
	x1 * x2
}

#[wasm_bindgen]
pub fn readfile( text : &str ) -> String {
	text.to_string()
}
