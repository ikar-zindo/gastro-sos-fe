const requiredFields = (value) => {
	if (value) {
		return undefined;
	}

	return "Field is required";
}