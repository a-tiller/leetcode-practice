use std::collections::HashMap;

impl Solution {
    pub fn can_form_array(arr: Vec<i32>, pieces: Vec<Vec<i32>>) -> bool {

        let mut pieces_index: HashMap<i32, &Vec<i32>> = HashMap::with_capacity(pieces.len());

        for piece in pieces.iter() {
          pieces_index.insert(piece[0], &piece);
        }

        let mut position = 0;

        while position < arr.len() {
            match pieces_index.get(&arr[position]) {
                None => {
                    return false;
                }
                Some(piece) => {
                    for number in piece.iter() {
                        if (&arr[position] != number) {
                            return false;
                        }
                        position += 1;
                    }
                }
            }
        }

        return true;
    }
}