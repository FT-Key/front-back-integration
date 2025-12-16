import * as bannerService from "../services/banner.service.js";

export const getBanners = async (req, res) => {
  try {
    const banners = await bannerService.getAllBanners();
    res.json(banners);
  } catch (error) {
    res.status(500).json({ message: "ERROR_GET_BANNERS" });
  }
};

export const getBanner = async (req, res) => {
  try {
    const banner = await bannerService.getBannerById(req.params.id);
    if (!banner) {
      return res.status(404).json({ message: "BANNER_NOT_FOUND" });
    }
    res.json(banner);
  } catch (error) {
    res.status(400).json({ message: "INVALID_BANNER_ID" });
  }
};

export const createBanner = async (req, res) => {
  try {
    const newBanner = await bannerService.createBanner(req.body);
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(400).json({ message: "ERROR_CREATE_BANNER" });
  }
};

export const updateBanner = async (req, res) => {
  try {
    const updatedBanner = await bannerService.updateBanner(
      req.params.id,
      req.body
    );
    res.json(updatedBanner);
  } catch (error) {
    if (error.message === "BANNER_NOT_FOUND") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: "ERROR_UPDATE_BANNER" });
  }
};

export const deleteBanner = async (req, res) => {
  try {
    await bannerService.deleteBanner(req.params.id);
    res.json({ message: "BANNER_DELETED" });
  } catch (error) {
    if (error.message === "BANNER_NOT_FOUND") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: "ERROR_DELETE_BANNER" });
  }
};
