export default (mongoose) => {
  const schema = mongoose.Schema({
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
  });

  const Grade = mongoose.model('grade', schema, 'grade');

  return Grade;
};
