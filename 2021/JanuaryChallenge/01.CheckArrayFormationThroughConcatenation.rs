use std::collections::HashMap;

impl Solution {
  pub fn can_form_array(arr: Vec<i32>, pieces: Vec<Vec<i32>>) -> bool {
      // hash pieces by value at index 0
      let mut pieces_index: HashMap<i32, &Vec<i32>> = HashMap::with_capacity(pieces.len());

      for piece in pieces.iter() {
        pieces_index.insert(piece[0], &piece);
      }

      // walk the sequence
      let mut position = 0;

      while position < arr.len() {
          match pieces_index.get(&arr[position]) {
              None => {
                  return false;
              }
              Some(subarray) => {
                  let mut subarray_position = 0;

                  while subarray_position < subarray.len() {
                      if (subarray[subarray_position] != arr[position]) {
                        return false;
                      }

                      position += 1;
                      subarray_position += 1;
                  }
              }
          }
      }

      return true;
  }
}