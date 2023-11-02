function AssignmentEditor() {
  const { courseId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="list-group mb-4" style={{ width: "40%" }}>
        <input
          value={assignment.name}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
        />
        <textarea
          value={assignment.description}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, description: e.target.value }))
          }
        />
        <div className="d-flex">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => dispatch(updateAssignment(assignment))}
          >
            Update
          </button>
          <button
            className="btn btn-sm btn-success"
            onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;