import Banner from "../models/Banner.model.js";

export const getAllBanners = async () => Banner.find().lean();
export const getBannerById = async (id) => Banner.findById(id);
export const createBanner = async (data) => Banner.create(data);

export const updateBanner = async (id, data) => {
  const banner = await Banner.findByIdAndUpdate(id, data, { new: true });
  if (!banner) throw new Error("BANNER_NOT_FOUND");
  return banner;
};

export const deleteBanner = async (id) => {
  const banner = await Banner.findByIdAndDelete(id);
  if (!banner) throw new Error("BANNER_NOT_FOUND");
};
