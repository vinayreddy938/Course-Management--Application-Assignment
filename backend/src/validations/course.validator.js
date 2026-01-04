export const createCourseValidator = (req, res, next) => {
  const payload = req.body;

  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).json({ success: false, message: "body required" });
  }

  const permittedFields = ["name", "category", "price", "imgUrl", "description"];
  const requestFields = Object.keys(payload);

  const containsExtraFields = requestFields.some(
    field => !permittedFields.includes(field)
  );

  if (containsExtraFields) {
    return res.status(400).json({
      success: false,
      message: "invalid fields in request body"
    });
  }

  const hasAllRequiredFields = permittedFields.every(
    field => requestFields.includes(field)
  );

  if (!hasAllRequiredFields) {
    return res.status(400).json({
      success: false,
      message: "data should be in name,category,price,imgUrl,description"
    });
  }

  const { name, category, price, imgUrl, description } = payload;

  if (!name || name.trim().length === 0) {
    return res.status(400).json({ success: false, message: "name required" });
  }

  if (!category || category.trim().length === 0) {
    return res.status(400).json({ success: false, message: "category required" });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({ success: false, message: "price invalid" });
  }

  if (!imgUrl || imgUrl.trim().length === 0) {
    return res.status(400).json({ success: false, message: "imgUrl required" });
  }

  if (!description || description.trim().length === 0) {
    return res.status(400).json({ success: false, message: "description required" });
  }

  next();
};
export const updateCourseValidator = (req, res, next) => {
  const payload = req.body;
  const courseId = req.params.id;

  if (!courseId) {
    return res.status(400).json({ success: false, message: "course id required" });
  }

  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).json({ success: false, message: "body required" });
  }

  const permittedFields = ["name", "category", "price", "imgUrl", "description"];
  const requestFields = Object.keys(payload);

  const containsExtraFields = requestFields.some(
    field => !permittedFields.includes(field)
  );

  if (containsExtraFields) {
    return res.status(400).json({
      success: false,
      message: "invalid fields in request body"
    });
  }

  const { name, category, price, imgUrl, description } = payload;

  if (name !== undefined && name.trim().length === 0) {
    return res.status(400).json({ success: false, message: "name invalid" });
  }

  if (category !== undefined && category.trim().length === 0) {
    return res.status(400).json({ success: false, message: "category invalid" });
  }

  if (price !== undefined && (typeof price !== "number" || price <= 0)) {
    return res.status(400).json({ success: false, message: "price invalid" });
  }

  if (imgUrl !== undefined && imgUrl.trim().length === 0) {
    return res.status(400).json({ success: false, message: "imgUrl invalid" });
  }

  if (description !== undefined && description.trim().length === 0) {
    return res.status(400).json({ success: false, message: "description invalid" });
  }

  next();
};
