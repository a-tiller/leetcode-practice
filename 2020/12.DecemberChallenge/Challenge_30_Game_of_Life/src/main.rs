

struct Board<'a> {
    board: &'a mut Vec<Vec<i32>>,
}

impl<'a> Board<'a> {
    fn min_row(&self) -> isize {
        0
    }

    fn max_row(&self) -> isize {
        (self.board.len() - 1) as isize
    }

    fn min_column(&self) -> isize {
        0
    }

    fn max_column(&self) -> isize {
        (self.board[0].len() - 1) as isize
    }

    fn get(&self, position: Position) -> i32 {
        self.board[position.row][position.column]
    }

    fn count_neighbors(&self, current: &Position) -> i32 {
        let offsets: [Offset; 8] =   [
                          Offset {row: -1, column: -1},
                          Offset {row: -1, column:  0},
                          Offset {row: -1, column:  1},
                          Offset {row:  0, column: -1},
                          Offset {row:  0, column:  1},
                          Offset {row:  1, column: -1},
                          Offset {row:  1, column:  0},
                          Offset {row:  1, column:  1},
        ];

        let mut count = 0;

        for offset in offsets.iter() {
            let target = current.shift_by(offset, self);
            if target.is_some() {
                count += self.get(target.unwrap());
            }
        }

        count
    }

    fn set(&mut self, position: &Position, value: i32) {
        self.board[position.row][position.column] = value;
    }

    fn iterate(&mut self) {
        let mut birth: Vec<Position> = Vec::new();
        let mut death: Vec<Position> = Vec::new();

        for (row_index, row) in self.board.iter().enumerate() {
            for (column_index, value) in row.iter().enumerate() {
                let current = Position { row: row_index, column: column_index};
                let neighbors = self.count_neighbors(&current);

                if *value == 0 {
                    if neighbors == 3 {
                        birth.push(current);
                    }
                } else if *value == 1 {
                    if neighbors < 2 || neighbors > 3 {
                        death.push(current);
                    }

                }
            }
        }

        for to_live in birth.iter() {
            self.set(to_live, 1);
        }

        for to_die in death.iter() {
            self.set(to_die, 0);
        }
    }
}

struct Offset {
    row: isize,
    column: isize,
  }

struct Position {
    row: usize,
    column: usize,
}

impl Position {
    fn shift_by(&self, shift: &Offset, board: &Board) -> Option<Position> {
       let shifted_row = self.row as isize + shift.row;
       let shifted_column = self.column as isize + shift.column;

       if shifted_row < board.min_row() || shifted_row > board.max_row() {
           return None;
       }

       if shifted_column < board.min_column() || shifted_column > board.max_column() {
           return None;
       }

       Some(Position {row: shifted_row as usize, column: shifted_column as usize})
    }
}

impl Solution {

    pub fn game_of_life(board: &mut Vec<Vec<i32>>) {
        let mut working_board = Board { board };
        working_board.iterate();
    }


}