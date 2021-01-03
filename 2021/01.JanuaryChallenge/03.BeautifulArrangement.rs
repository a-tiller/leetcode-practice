impl Solution {
    pub fn count_arrangement(n: i32) -> i32 {
        fn beautiful_arranger(mut remaining: &mut Vec<i32>, size: &i32, mut count: i32) -> i32 {
            if remaining.is_empty() {
                return count + 1;
            }

            let position = 1 + size - remaining.len() as i32;

            for i in 0..remaining.len() {
                // let number = remaining[i];
                let number = match remaining.get(i) {
                    Some(value) => *value,
                    None => {
                        continue;
                    }
                };

                if number % position == 0 || position % number == 0 {
                    remaining.remove(i);
                    count = beautiful_arranger(&mut remaining, &size, count);
                    remaining.insert(i, number);
                }
            }

            count
        }

        let mut numbers: Vec<i32> = (1..n + 1).collect();

        beautiful_arranger(&mut numbers, &n, 0)
    }
}