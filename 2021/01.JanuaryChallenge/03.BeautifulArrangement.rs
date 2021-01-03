use std::collections::HashSet;

impl Solution {
    pub fn count_arrangement(n: i32) -> i32 {
        let mut numbers: HashSet<i32> = HashSet::with_capacity(n as usize);
        for number in 1..(n + 1) {
          numbers.insert(number);
        }

        fn beautiful_arranger(mut remaining: &mut HashSet<i32>, size: &i32, mut count: i32) -> i32 {
          if remaining.is_empty() {
            return count + 1;
          }

          let position = 1 + size - remaining.len() as i32;
          let todo = remaining.clone();

          for number in todo.iter() {
            if number % position == 0 || position % number == 0 {
              remaining.remove(&number);
              count = beautiful_arranger(&mut remaining, &size, count);
              remaining.insert(*number);
            }
          }

          count
        }

        beautiful_arranger(&mut numbers, &n, 0)
    }
}