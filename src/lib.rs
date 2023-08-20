use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    let base64_to_vector = decode(encoded_file).unwrap();

    let mut image = load_from_memory(&base64_to_vector).unwrap();

    image = image.grayscale();

    let mut buffer = vec![];
    image.write_to(&mut buffer, Png).unwrap();

    let encoded_image = encode(&buffer);
    let data_url = format!("data:image/png;base64, {}", encoded_image);

    return data_url;
}
