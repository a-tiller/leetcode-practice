use std::cmp;

impl Solution {
  pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
      let mut stack: Vec<i32> = Vec::new();
      // backstop left edge for the minimal element
      stack.push(-1);

      let mut largest_area_seen = 0;

      for (index, height) in heights.iter().enumerate() {
          // if we've descended, check for rectangles that end on the prior index
          while stack.len() > 1 && &heights[stack[stack.len() - 1] as usize] > height {
              let right_hand_edge = index as i32 - 1;
              let rectangle_height = heights[stack.pop().unwrap() as usize];
              let left_hand_edge = stack[stack.len() - 1];

              let area = rectangle_height * (right_hand_edge - left_hand_edge);

              largest_area_seen = cmp::max(largest_area_seen, area);
          }

          stack.push(index as i32);
      }

      // unwind the stack with rectangles that end on the last index
      let right_hand_edge = heights.len() as i32 - 1;

      while stack.len() > 1 {
          let rectangle_height = heights[stack.pop().unwrap() as usize];
          let left_hand_edge = stack[stack.len() - 1];

          let area = rectangle_height * (right_hand_edge - left_hand_edge);

          largest_area_seen = cmp::max(largest_area_seen, area);
      }

    largest_area_seen
  }
}