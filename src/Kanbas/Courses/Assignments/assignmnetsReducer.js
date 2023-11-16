import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Database";


const initialState = {
    assignments: [],
    assignment: { title: "New Title", description: "New Description",
                 dueDate: "2023-01-10", availableFromDate: "2023-01-10",
                availableUntilDate: "2023-01-10", points: "100"
                },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment, setAssignments} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;