export default (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        required: false,
      },
      lastModified: {
        type: Date,
        required: true,
      },
    },
    {
      versionKey: false,
    }
  );

  const Grade = mongoose.model('grades', schema, 'grades');

  return Grade;
};
