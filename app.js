//jshint esversion:6
require("dotenv").config();

const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const PLM = require("passport-local-mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "this is the secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/USERDATA", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  secret: String,
});

userSchema.plugin(PLM);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const yearSchema = new mongoose.Schema({
  year: Number,
  spot: String,
  // By Month ///////////
  sheet1: {
    f_jan_acc: Number,
    gi_jan_acc: Number,
    mi_jan_acc: Number,
    ni_jan_acc: Number,
    tot_jan_acc: Number,
    kil_jan_pep: Number,
    gi_jan_pep: Number,
    mi_jan_pep: Number,
    tot_jan_pep: Number,

    f_feb_acc: Number,
    gi_feb_acc: Number,
    mi_feb_acc: Number,
    ni_feb_acc: Number,
    tot_feb_acc: Number,
    kil_feb_pep: Number,
    gi_feb_pep: Number,
    mi_feb_pep: Number,
    tot_feb_pep: Number,

    f_mar_acc: Number,
    gi_mar_acc: Number,
    mi_mar_acc: Number,
    ni_mar_acc: Number,
    tot_mar_acc: Number,
    kil_mar_pep: Number,
    gi_mar_pep: Number,
    mi_mar_pep: Number,
    tot_mar_pep: Number,

    f_apr_acc: Number,
    gi_apr_acc: Number,
    mi_apr_acc: Number,
    ni_apr_acc: Number,
    tot_apr_acc: Number,
    kil_apr_pep: Number,
    gi_apr_pep: Number,
    mi_apr_pep: Number,
    tot_apr_pep: Number,

    f_may_acc: Number,
    gi_may_acc: Number,
    mi_may_acc: Number,
    ni_may_acc: Number,
    tot_may_acc: Number,
    kil_may_pep: Number,
    gi_may_pep: Number,
    mi_may_pep: Number,
    tot_may_pep: Number,

    f_jun_acc: Number,
    gi_jun_acc: Number,
    mi_jun_acc: Number,
    ni_jun_acc: Number,
    tot_jun_acc: Number,
    kil_jun_pep: Number,
    gi_jun_pep: Number,
    mi_jun_pep: Number,
    tot_jun_pep: Number,

    f_jul_acc: Number,
    gi_jul_acc: Number,
    mi_jul_acc: Number,
    ni_jul_acc: Number,
    tot_jul_acc: Number,
    kil_jul_pep: Number,
    gi_jul_pep: Number,
    mi_jul_pep: Number,
    tot_jul_pep: Number,

    f_aug_acc: Number,
    gi_aug_acc: Number,
    mi_aug_acc: Number,
    ni_aug_acc: Number,
    tot_aug_acc: Number,
    kil_aug_pep: Number,
    gi_aug_pep: Number,
    mi_aug_pep: Number,
    tot_aug_pep: Number,

    f_sep_acc: Number,
    gi_sep_acc: Number,
    mi_sep_acc: Number,
    ni_sep_acc: Number,
    tot_sep_acc: Number,
    kil_sep_pep: Number,
    gi_sep_pep: Number,
    mi_sep_pep: Number,
    tot_sep_pep: Number,

    f_oct_acc: Number,
    gi_oct_acc: Number,
    mi_oct_acc: Number,
    ni_oct_acc: Number,
    tot_oct_acc: Number,
    kil_oct_pep: Number,
    gi_oct_pep: Number,
    mi_oct_pep: Number,
    tot_oct_pep: Number,

    f_nov_acc: Number,
    gi_nov_acc: Number,
    mi_nov_acc: Number,
    ni_nov_acc: Number,
    tot_nov_acc: Number,
    kil_nov_pep: Number,
    gi_nov_pep: Number,
    mi_nov_pep: Number,
    tot_nov_pep: Number,

    f_dec_acc: Number,
    gi_dec_acc: Number,
    mi_dec_acc: Number,
    ni_dec_acc: Number,
    tot_dec_acc: Number,
    kil_dec_pep: Number,
    gi_dec_pep: Number,
    mi_dec_pep: Number,
    tot_dec_pep: Number,

    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    kil_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep: Number,
  },

  // By Time /////////
  sheet2: {
    f_urb_69_acc: Number,
    gi_urb_69_acc: Number,
    mi_urb_69_acc: Number,
    ni_urb_69_acc: Number,
    tot_urb_69_acc: Number,
    kil_urb_69_pep: Number,
    gi_urb_69_pep: Number,
    mi_urb_69_pep: Number,
    tot_urb_69_pep : Number,

    f_rur_69_acc: Number,
    gi_rur_69_acc: Number,
    mi_rur_69_acc: Number,
    ni_rur_69_acc: Number,
    tot_rur_69_acc: Number,
    kil_rur_69_pep: Number,
    gi_rur_69_pep: Number,
    mi_rur_69_pep: Number,
    tot_rur_69_pep : Number,

    f_urb_912_acc: Number,
    gi_urb_912_acc: Number,
    mi_urb_912_acc: Number,
    ni_urb_912_acc: Number,
    tot_urb_912_acc: Number,
    kil_urb_912_pep: Number,
    gi_urb_912_pep: Number,
    mi_urb_912_pep: Number,
    tot_urb_912_pep : Number,

    f_rur_912_acc: Number,
    gi_rur_912_acc: Number,
    mi_rur_912_acc: Number,
    ni_rur_912_acc: Number,
    tot_rur_912_acc: Number,
    kil_rur_912_pep: Number,
    gi_rur_912_pep: Number,
    mi_rur_912_pep: Number,
    tot_rur_tot_pep: Number,

    f_urb_1215_acc: Number,
    gi_urb_1215_acc: Number,
    mi_urb_1215_acc: Number,
    ni_urb_1215_acc: Number,
    tot_urb_1215_acc: Number,
    kil_urb_1215_pep: Number,
    gi_urb_1215_pep: Number,
    mi_urb_1215_pep: Number,
    tot_urb_1215_pep : Number,

    f_rur_1215_acc: Number,
    gi_rur_1215_acc: Number,
    mi_rur_1215_acc: Number,
    ni_rur_1215_acc: Number,
    tot_rur_1215_acc: Number,
    kil_rur_1215_pep: Number,
    gi_rur_1215_pep: Number,
    mi_rur_1215_pep: Number,
    tot_rur_tot_pep: Number,

    f_urb_1518_acc: Number,
    gi_urb_1518_acc: Number,
    mi_urb_1518_acc: Number,
    ni_urb_1518_acc: Number,
    tot_urb_1518_acc: Number,
    kil_urb_1518_pep: Number,
    gi_urb_1518_pep: Number,
    mi_urb_1518_pep: Number,
    tot_urb_1518_pep : Number,

    f_rur_1518_acc: Number,
    gi_rur_1518_acc: Number,
    mi_rur_1518_acc: Number,
    ni_rur_1518_acc: Number,
    tot_rur_1518_acc: Number,
    kil_rur_1518_pep: Number,
    gi_rur_1518_pep: Number,
    mi_rur_1518_pep: Number,
    tot_rur_tot_pep: Number,

    f_urb_1821_acc: Number,
    gi_urb_1821_acc: Number,
    mi_urb_1821_acc: Number,
    ni_urb_1821_acc: Number,
    tot_urb_1821_acc: Number,
    kil_urb_1821_pep: Number,
    gi_urb_1821_pep: Number,
    mi_urb_1821_pep: Number,
    tot_urb_1821_pep : Number,

    f_rur_1821_acc: Number,
    gi_rur_1821_acc: Number,
    mi_rur_1821_acc: Number,
    ni_rur_1821_acc: Number,
    tot_rur_1821_acc: Number,
    kil_rur_1821_pep: Number,
    gi_rur_1821_pep: Number,
    mi_rur_1821_pep: Number,
    tot_rur_tot_pep: Number,

    f_urb_2124_acc: Number,
    gi_urb_2124_acc: Number,
    mi_urb_2124_acc: Number,
    ni_urb_2124_acc: Number,
    tot_urb_2124_acc: Number,
    kil_urb_2124_pep: Number,
    gi_urb_2124_pep: Number,
    mi_urb_2124_pep: Number,
    tot_urb_2124_pep : Number,

    f_rur_2124_acc: Number,
    gi_rur_2124_acc: Number,
    mi_rur_2124_acc: Number,
    ni_rur_2124_acc: Number,
    tot_rur_2124_acc: Number,
    kil_rur_2124_pep: Number,
    gi_rur_2124_pep: Number,
    mi_rur_2124_pep: Number,
    tot_rur_tot_pep: Number,

    f_urb_003_acc: Number,
    gi_urb_003_acc: Number,
    mi_urb_003_acc: Number,
    ni_urb_003_acc: Number,
    tot_urb_003_acc: Number,
    kil_urb_003_pep: Number,
    gi_urb_003_pep: Number,
    mi_urb_003_pep: Number,
    tot_urb_003_pep : Number,

    f_rur_003_acc: Number,
    gi_rur_003_acc: Number,
    mi_rur_003_acc: Number,
    ni_rur_003_acc: Number,
    tot_rur_003_acc: Number,
    kil_rur_003_pep: Number,
    gi_rur_003_pep: Number,
    mi_rur_003_pep: Number,
    tot_rur_tot_pep: Number,

    f_urb_36_acc: Number,
    gi_urb_36_acc: Number,
    mi_urb_36_acc: Number,
    ni_urb_36_acc: Number,
    tot_urb_36_acc: Number,
    kil_urb_36_pep: Number,
    gi_urb_36_pep: Number,
    mi_urb_36_pep: Number,
    tot_urb_36_pep : Number,

    f_rur_36_acc: Number,
    gi_rur_36_acc: Number,
    mi_rur_36_acc: Number,
    ni_rur_36_acc: Number,
    tot_rur_36_acc: Number,
    kil_rur_36_pep: Number,
    gi_rur_36_pep: Number,
    mi_rur_36_pep: Number,
    tot_rur_tot_pep: Number,

    f_urb_unk_acc: Number,
    gi_urb_unk_acc: Number,
    mi_urb_unk_acc: Number,
    ni_urb_unk_acc: Number,
    tot_urb_unk_acc: Number,
    kil_urb_unk_pep: Number,
    gi_urb_unk_pep: Number,
    mi_urb_unk_pep: Number,
    tot_urb_unk_pep : Number,

    f_rur_unk_acc: Number,
    gi_rur_unk_acc: Number,
    mi_rur_unk_acc: Number,
    ni_rur_unk_acc: Number,
    tot_rur_unk_acc: Number,
    kil_rur_unk_pep: Number,
    gi_rur_unk_pep: Number,
    mi_rur_unk_pep: Number,
    tot_rur_tot_pep: Number,

    f_urb_tot_acc: Number,
    gi_urb_tot_acc: Number,
    mi_urb_tot_acc: Number,
    ni_urb_tot_acc: Number,
    tot_urb_tot_acc: Number,
    kil_urb_tot_pep: Number,
    gi_urb_tot_pep: Number,
    mi_urb_tot_pep: Number,
    tot_urb_tot_pep : Number,

    f_rur_tot_acc: Number,
    gi_rur_tot_acc: Number,
    mi_rur_tot_acc: Number,
    ni_rur_tot_acc: Number,
    tot_rur_tot_acc: Number,
    kil_rur_tot_pep: Number,
    gi_rur_tot_pep: Number,
    mi_rur_tot_pep: Number,
    tot_rur_tot_pep: Number,
  },
  // By Weather /////////
  sheet3: {
    f_sun_acc: Number,
    gi_sun_acc : Number,
    mi_sun_acc : Number,
    ni_sun_acc : Number,
    tot_sun_acc : Number,
    kil_sun_pep : Number,
    gi_sun_pep :Number,
    mi_sun_pep :Number,
    tot_sun_pep : Number,
    
    f_rain_acc: Number,
    gi_rain_acc : Number,
    mi_rain_acc : Number,
    ni_rain_acc : Number,
    tot_rain_acc : Number,
    kil_rain_pep : Number,
    gi_rain_pep :Number,
    mi_rain_pep :Number,
    tot_rain_pep : Number,

    f_fog_acc: Number,
    gi_fog_acc : Number,
    mi_fog_acc : Number,
    ni_fog_acc : Number,
    tot_fog_acc : Number,
    kil_fog_pep : Number,
    gi_fog_pep :Number,
    mi_fog_pep :Number,
    tot_fog_pep : Number,

    f_hail_acc: Number,
    gi_hail_acc : Number,
    mi_hail_acc : Number,
    ni_hail_acc : Number,
    tot_hail_acc : Number,
    kil_hail_pep : Number,
    gi_hail_pep :Number,
    mi_hail_pep :Number,
    tot_hail_pep : Number,

    f_oth_acc: Number,
    gi_oth_acc : Number,
    mi_oth_acc : Number,
    ni_oth_acc : Number,
    tot_oth_acc : Number,
    kil_oth_pep : Number,
    gi_oth_pep :Number,
    mi_oth_pep :Number,
    tot_oth_pep : Number,

    f_tot_acc: Number,
    gi_tot_acc : Number,
    mi_tot_acc : Number,
    ni_tot_acc : Number,
    tot_tot_acc : Number,
    kil_tot_pep : Number,
    gi_tot_pep :Number,
    mi_tot_pep :Number,
    tot_tot_pep : Number,
  },
  // By Roads ////////
  sheet4: {
    f_exp_acc: Number,
    gi_exp_acc: Number,
    mi_exp_acc: Number,
    ni_exp_acc: Number,
    tot_exp_acc: Number,
    k_exp_pep: Number,
    gi_exp_pep: Number,
    mi_exp_pep: Number,
    tot_exp_pep : Number,

    f_nh_acc: Number,
    gi_nh_acc: Number,
    mi_nh_acc: Number,
    ni_nh_acc: Number,
    tot_nh_acc: Number,
    k_nh_pep: Number,
    gi_nh_pep: Number,
    mi_nh_pep: Number,
    tot_nh_pep : Number,

    f_sh_acc: Number,
    gi_sh_acc: Number,
    mi_sh_acc: Number,
    ni_sh_acc: Number,
    tot_sh_acc: Number,
    k_sh_pep: Number,
    gi_sh_pep: Number,
    mi_sh_pep: Number,
    tot_sh_pep : Number,

    f_or_acc: Number,
    gi_or_acc: Number,
    mi_or_acc: Number,
    ni_or_acc: Number,
    tot_or_acc: Number,
    k_or_pep: Number,
    gi_or_pep: Number,
    mi_or_pep: Number,
    tot_or_pep : Number,

    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,

  },
  // By Road Env ////////
  sheet5: {
    f_ra_acc: Number,
    gi_ra_acc: Number,
    mi_ra_acc: Number,
    ni_ra_acc: Number,
    tot_ra_acc: Number,
    k_ra_pep: Number,
    gi_ra_pep: Number,
    mi_ra_pep: Number,

    f_ia_acc: Number,
    gi_ia_acc: Number,
    mi_ia_acc: Number,
    ni_ia_acc: Number,
    tot_ia_acc: Number,
    k_ia_pep: Number,
    gi_ia_pep: Number,
    mi_ia_pep: Number,

    f_ca_acc: Number,
    gi_ca_acc: Number,
    mi_ca_acc: Number,
    ni_ca_acc: Number,
    tot_ca_acc: Number,
    k_ca_pep: Number,
    gi_ca_pep: Number,
    mi_ca_pep: Number,

    f_oa_acc: Number,
    gi_oa_acc: Number,
    mi_oa_acc: Number,
    ni_oa_acc: Number,
    tot_oa_acc: Number,
    k_oa_pep: Number,
    gi_oa_pep: Number,
    mi_oa_pep: Number,

    f_oth_acc: Number,
    gi_oth_acc: Number,
    mi_oth_acc: Number,
    ni_oth_acc: Number,
    tot_oth_acc: Number,
    k_oth_pep: Number,
    gi_oth_pep: Number,
    mi_oth_pep: Number,

    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
  },
  // By Road Features /////
  sheet6: {
    f_sr_acc: Number,
    gi_sr_acc: Number,
    mi_sr_acc: Number,
    ni_sr_acc: Number,
    tot_sr_acc: Number,
    k_sr_pep: Number,
    gi_sr_pep: Number,
    mi_sr_pep: Number,
    tot_sr_pep : Number,


    f_cr_acc: Number,
    gi_cr_acc: Number,
    mi_cr_acc: Number,
    ni_cr_acc: Number,
    tot_cr_acc: Number,
    k_cr_pep: Number,
    gi_cr_pep: Number,
    mi_cr_pep: Number,
    tot_cr_pep : Number,


    f_brid_acc: Number,
    gi_brid_acc: Number,
    mi_brid_acc: Number,
    ni_brid_acc: Number,
    tot_brid_acc: Number,
    k_brid_pep: Number,
    gi_brid_pep: Number,
    mi_brid_pep: Number,
    tot_brid_pep : Number,


    f_culv_acc: Number,
    gi_culv_acc: Number,
    mi_culv_acc: Number,
    ni_culv_acc: Number,
    tot_culv_acc: Number,
    k_culv_pep: Number,
    gi_culv_pep: Number,
    mi_culv_pep: Number,
    tot_culv_pep : Number,


    f_poth_acc: Number,
    gi_poth_acc: Number,
    mi_poth_acc: Number,
    ni_poth_acc: Number,
    tot_poth_acc: Number,
    k_poth_pep: Number,
    gi_poth_pep: Number,
    mi_poth_pep: Number,
    tot_poth_pep : Number,


    f_steepg_acc: Number,
    gi_steepg_acc: Number,
    mi_steepg_acc: Number,
    ni_steepg_acc: Number,
    tot_steepg_acc: Number,
    k_steepg_pep: Number,
    gi_steepg_pep: Number,
    mi_steepg_pep: Number,
    tot_steepg_pep : Number,


    f_underc_acc: Number,
    gi_underc_acc: Number,
    mi_underc_acc: Number,
    ni_underc_acc: Number,
    tot_underc_acc: Number,
    k_underc_pep: Number,
    gi_underc_pep: Number,
    mi_underc_pep: Number,
    tot_underc_pep : Number,


    f_others_acc: Number,
    gi_others_acc: Number,
    mi_others_acc: Number,
    ni_others_acc: Number,
    tot_others_acc: Number,
    k_others_pep: Number,
    gi_others_pep: Number,
    mi_others_pep: Number,
    tot_others_pep : Number,


    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,
  },

  // By Junction Type /////
  sheet7: {
    f_tjn_acc: Number,
    gi_tjn_acc: Number,
    mi_tjn_acc: Number,
    ni_tjn_acc: Number,
    tot_tjn_acc: Number,
    k_tjn_pep: Number,
    gi_tjn_pep: Number,
    mi_tjn_pep: Number,
    tot_tjn_pep : Number,

    f_yjn_acc: Number,
    gi_yjn_acc: Number,
    mi_yjn_acc: Number,
    ni_yjn_acc: Number,
    tot_yjn_acc: Number,
    k_yjn_pep: Number,
    gi_yjn_pep: Number,
    mi_yjn_pep: Number,
    tot_yjn_pep : Number,


    f_faj_acc: Number,
    gi_faj_acc: Number,
    mi_faj_acc: Number,
    ni_faj_acc: Number,
    tot_faj_acc: Number,
    k_faj_pep: Number,
    gi_faj_pep: Number,
    mi_faj_pep: Number,
    tot_faj_pep : Number,


    f_sj_acc: Number,
    gi_sj_acc: Number,
    mi_sj_acc: Number,
    ni_sj_acc: Number,
    tot_sj_acc: Number,
    k_sj_pep: Number,
    gi_sj_pep: Number,
    mi_sj_pep: Number,
    tot_sj_pep : Number,


    f_raj_acc: Number,
    gi_raj_acc: Number,
    mi_raj_acc: Number,
    ni_raj_acc: Number,
    tot_raj_acc: Number,
    k_raj_pep: Number,
    gi_raj_pep: Number,
    mi_raj_pep: Number,
    tot_raj_pep : Number,


    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,

  },

  // By traffic Control at jnc //////
  sheet8: {
    f_tls_acc: Number,
    gi_tls_acc: Number,
    mi_tls_acc: Number,
    ni_tls_acc: Number,
    tot_tls_acc: Number,
    k_tls_pep: Number,
    gi_tls_pep: Number,
    mi_tls_pep: Number,
    tot_tls_pep :Number ,

    f_pc_acc: Number,
    gi_pc_acc: Number,
    mi_pc_acc: Number,
    ni_pc_acc: Number,
    tot_pc_acc: Number,
    k_pc_pep: Number,
    gi_pc_pep: Number,
    mi_pc_pep: Number,
    tot_pc_pep :Number ,

    f_ss_acc: Number,
    gi_ss_acc: Number,
    mi_ss_acc: Number,
    ni_ss_acc: Number,
    tot_ss_acc: Number,
    k_ss_pep: Number,
    gi_ss_pep: Number,
    mi_ss_pep: Number,
    tot_ss_pep :Number ,

    f_fs_acc: Number,
    gi_fs_acc: Number,
    mi_fs_acc: Number,
    ni_fs_acc: Number,
    tot_fs_acc: Number,
    k_fs_pep: Number,
    gi_fs_pep: Number,
    mi_fs_pep: Number,
    tot_fs_pep :Number ,

    f_unc_acc: Number,
    gi_unc_acc: Number,
    mi_unc_acc: Number,
    ni_unc_acc: Number,
    tot_unc_acc: Number,
    k_unc_pep: Number,
    gi_unc_pep: Number,
    mi_unc_pep: Number,
    tot_unc_pep :Number ,

    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep :Number ,
  },

  // By Ped infrastructure /////
  sheet9: {
    f_zc_acc: Number,
    gi_zc_acc: Number,
    mi_zc_acc: Number,
    ni_zc_acc: Number,
    tot_zc_acc: Number,
    k_zc_pep: Number,
    gi_zc_pep: Number,
    mi_zc_pep: Number,
    tot_zc_pep : Number,

    f_fb_acc: Number,
    gi_fb_acc: Number,
    mi_fb_acc: Number,
    ni_fb_acc: Number,
    tot_fb_acc: Number,
    k_fb_pep: Number,
    gi_fb_pep: Number,
    mi_fb_pep: Number,
    tot_fb_pep : Number,


    f_fp_acc: Number,
    gi_fp_acc: Number,
    mi_fp_acc: Number,
    ni_fp_acc: Number,
    tot_fp_acc: Number,
    k_fp_pep: Number,
    gi_fp_pep: Number,
    mi_fp_pep: Number,
    tot_fp_pep : Number,


    f_others_acc: Number,
    gi_others_acc: Number,
    mi_others_acc: Number,
    ni_others_acc: Number,
    tot_others_acc: Number,
    k_others_pep: Number,
    gi_others_pep: Number,
    mi_others_pep: Number,
    tot_others_pep : Number,


    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,

  },

  // By type of impacting vehicles //////
  sheet10: {
    f_ped_acc: Number,
    gi_ped_acc: Number,
    mi_ped_acc: Number,
    ni_ped_acc: Number,
    tot_ped_acc: Number,
    k_ped_pep: Number,
    gi_ped_pep: Number,
    mi_ped_pep: Number,
    tot_ped_pep : Number,

    f_byc_acc: Number,
    gi_byc_acc: Number,
    mi_byc_acc: Number,
    ni_byc_acc: Number,
    tot_byc_acc: Number,
    k_byc_pep: Number,
    gi_byc_pep: Number,
    mi_byc_pep: Number,
    tot_byc_pep : Number,


    f_2wh_acc: Number,
    gi_2wh_acc: Number,
    mi_2wh_acc: Number,
    ni_2wh_acc: Number,
    tot_2wh_acc: Number,
    k_2wh_pep: Number,
    gi_2wh_pep: Number,
    mi_2wh_pep: Number,
    tot_2wh_pep : Number,


    f_arick_acc: Number,
    gi_arick_acc: Number,
    mi_arick_acc: Number,
    ni_arick_acc: Number,
    tot_arick_acc: Number,
    k_arick_pep: Number,
    gi_arick_pep: Number,
    mi_arick_pep: Number,
    tot_arick_pep : Number,

    f_4wh_acc: Number,
    gi_4wh_acc: Number,
    mi_4wh_acc: Number,
    ni_4wh_acc: Number,
    tot_4wh_acc: Number,
    k_4wh_pep: Number,
    gi_4wh_pep: Number,
    mi_4wh_pep: Number,
    tot_4wh_pep : Number,


    f_truck_acc: Number,
    gi_truck_acc: Number,
    mi_truck_acc: Number,
    ni_truck_acc: Number,
    tot_truck_acc: Number,
    k_truck_pep: Number,
    gi_truck_pep: Number,
    mi_truck_pep: Number,
    tot_truck_pep : Number,


    f_bus_acc: Number,
    gi_bus_acc: Number,
    mi_bus_acc: Number,
    ni_bus_acc: Number,
    tot_bus_acc: Number,
    k_bus_pep: Number,
    gi_bus_pep: Number,
    mi_bus_pep: Number,
    tot_bus_pep : Number,

    f_omv_acc: Number,
    gi_omv_acc: Number,
    mi_omv_acc: Number,
    ni_omv_acc: Number,
    tot_omv_acc: Number,
    k_omv_pep: Number,
    gi_omv_pep: Number,
    mi_omv_pep: Number,
    tot_omv_pep : Number,

    f_er_acc: Number,
    gi_er_acc: Number,
    mi_er_acc: Number,
    ni_er_acc: Number,
    tot_er_acc: Number,
    k_er_pep: Number,
    gi_er_pep: Number,
    mi_er_pep: Number,
    tot_er_pep : Number,

    f_nmv_acc: Number,
    gi_nmv_acc: Number,
    mi_nmv_acc: Number,
    ni_nmv_acc: Number,
    tot_nmv_acc: Number,
    k_nmv_pep: Number,
    gi_nmv_pep: Number,
    mi_nmv_pep: Number,
    tot_nmv_pep : Number,


    f_other_acc: Number,
    gi_other_acc: Number,
    mi_other_acc: Number,
    ni_other_acc: Number,
    tot_other_acc: Number,
    k_other_pep: Number,
    gi_other_pep: Number,
    mi_other_pep: Number,
    tot_other_pep : Number,


    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,

  },

  // By age of impacting vehicles /////
  sheet11: {
    f_5_acc: Number,
    gi_5_acc: Number,
    mi_5_acc: Number,
    ni_5_acc: Number,
    tot_5_acc: Number,
    k_5_pep: Number,
    gi_5_pep: Number,
    mi_5_pep: Number,
    tot_5_pep : Number,

    f_510_acc: Number,
    gi_510_acc: Number,
    mi_510_acc: Number,
    ni_510_acc: Number,
    tot_510_acc: Number,
    k_510_pep: Number,
    gi_510_pep: Number,
    mi_510_pep: Number,
    tot_510_pep : Number,


    f_1015_acc: Number,
    gi_1015_acc: Number,
    mi_1015_acc: Number,
    ni_1015_acc: Number,
    tot_1015_acc: Number,
    k_1015_pep: Number,
    gi_1015_pep: Number,
    mi_1015_pep: Number,
    tot_1015_pep : Number,


    f_15_acc: Number,
    gi_15_acc: Number,
    mi_15_acc: Number,
    ni_15_acc: Number,
    tot_15_acc: Number,
    k_15_pep: Number,
    gi_15_pep: Number,
    mi_15_pep: Number,
    tot_15_pep : Number,


    f_unk_acc: Number,
    gi_unk_acc: Number,
    mi_unk_acc: Number,
    ni_unk_acc: Number,
    tot_unk_acc: Number,
    k_unk_pep: Number,
    gi_unk_pep: Number,
    mi_unk_pep: Number,
    tot_unk_pep : Number,


    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,

  },

  //  By load of the vehicle ///
  sheet12: {
    f_nl_acc: Number,
    gi_nl_acc: Number,
    mi_nl_acc: Number,
    ni_nl_acc: Number,
    tot_nl_acc: Number,
    k_nl_pep: Number,
    gi_nl_pep: Number,
    mi_nl_pep: Number,
    tot_nl_pep : Number,

    f_ol_acc: Number,
    gi_ol_acc: Number,
    mi_ol_acc: Number,
    ni_ol_acc: Number,
    tot_ol_acc: Number,
    k_ol_pep: Number,
    gi_ol_pep: Number,
    mi_ol_pep: Number,
    tot_ol_pep : Number,


    f_emp_acc: Number,
    gi_emp_acc: Number,
    mi_emp_acc: Number,
    ni_emp_acc: Number,
    tot_emp_acc: Number,
    k_emp_pep: Number,
    gi_emp_pep: Number,
    mi_emp_pep: Number,
    tot_emp_pep : Number,


    f_notk_acc: Number,
    gi_notk_acc: Number,
    mi_notk_acc: Number,
    ni_notk_acc: Number,
    tot_notk_acc: Number,
    k_notk_pep: Number,
    gi_notk_pep: Number,
    mi_notk_pep: Number,
    tot_notk_pep : Number,


    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,

  },

  // By type of collision/impact

  sheet13: {
    f_v2v_acc: Number,
    gi_v2v_acc: Number,
    mi_v2v_acc: Number,
    ni_v2v_acc: Number,
    tot_v2v_acc: Number,
    k_v2v_pep: Number,
    gi_v2v_pep: Number,
    mi_v2v_pep: Number,
    tot_v2v_pep : Number,

    f_v2p_acc: Number,
    gi_v2p_acc: Number,
    mi_v2p_acc: Number,
    ni_v2p_acc: Number,
    tot_v2p_acc: Number,
    k_v2p_pep: Number,
    gi_v2p_pep: Number,
    mi_v2p_pep: Number,
    tot_v2p_pep : Number,


    f_v2nmv_acc: Number,
    gi_v2nmv_acc: Number,
    mi_v2nmv_acc: Number,
    ni_v2nmv_acc: Number,
    tot_v2nmv_acc: Number,
    k_v2nmv_pep: Number,
    gi_v2nmv_pep: Number,
    mi_v2nmv_pep: Number,
    tot_v2nmv_pep : Number,


    f_v2a_acc: Number,
    gi_v2a_acc: Number,
    mi_v2a_acc: Number,
    ni_v2a_acc: Number,
    tot_v2a_acc: Number,
    k_v2a_pep: Number,
    gi_v2a_pep: Number,
    mi_v2a_pep: Number,
    tot_v2a_pep : Number,


    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,


    f_hitnrun_acc: Number,
    gi_hitnrun_acc: Number,
    mi_hitnrun_acc: Number,
    ni_hitnrun_acc: Number,
    tot_hitnrun_acc: Number,
    k_hitnrun_pep: Number,
    gi_hitnrun_pep: Number,
    mi_hitnrun_pep: Number,
    tot_hitnrun_pep : Number,


    f_hitwpv_acc: Number,
    gi_hitwpv_acc: Number,
    mi_hitwpv_acc: Number,
    ni_hitwpv_acc: Number,
    tot_hitwpv_acc: Number,
    k_hitwpv_pep: Number,
    gi_hitwpv_pep: Number,
    mi_hitwpv_pep: Number,
    tot_hitwpv_pep : Number,


    f_hitfback_acc: Number,
    gi_hitfback_acc: Number,
    mi_hitfback_acc: Number,
    ni_hitfback_acc: Number,
    tot_hitfback_acc: Number,
    k_hitfback_pep: Number,
    gi_hitfback_pep: Number,
    mi_hitfback_pep: Number,
    tot_hitfback_pep : Number,


    f_hitfside_acc: Number,
    gi_hitfside_acc: Number,
    mi_hitfside_acc: Number,
    ni_hitfside_acc: Number,
    tot_hitfside_acc: Number,
    k_hitfside_pep: Number,
    gi_hitfside_pep: Number,
    mi_hitfside_pep: Number,
    tot_hitfside_pep : Number,


    f_runoffroad_acc: Number,
    gi_runoffroad_acc: Number,
    mi_runoffroad_acc: Number,
    ni_runoffroad_acc: Number,
    tot_runoffroad_acc: Number,
    k_runoffroad_pep: Number,
    gi_runoffroad_pep: Number,
    mi_runoffroad_pep: Number,
    tot_runoffroad_pep : Number,


    f_hitwfo_acc: Number,
    gi_hitwfo_acc: Number,
    mi_hitwfo_acc: Number,
    ni_hitwfo_acc: Number,
    tot_hitwfo_acc: Number,
    k_hitwfo_pep: Number,
    gi_hitwfo_pep: Number,
    mi_hitwfo_pep: Number,
    tot_hitwfo_pep : Number,


    f_vo_acc: Number,
    gi_vo_acc: Number,
    mi_vo_acc: Number,
    ni_vo_acc: Number,
    tot_vo_acc: Number,
    k_vo_pep: Number,
    gi_vo_pep: Number,
    mi_vo_pep: Number,
    tot_vo_pep : Number,


    f_hoc_acc: Number,
    gi_hoc_acc: Number,
    mi_hoc_acc: Number,
    ni_hoc_acc: Number,
    tot_hoc_acc: Number,
    k_hoc_pep: Number,
    gi_hoc_pep: Number,
    mi_hoc_pep: Number,
    tot_hoc_pep : Number,


    f_others_acc: Number,
    gi_others_acc: Number,
    mi_others_acc: Number,
    ni_others_acc: Number,
    tot_others_acc: Number,
    k_others_pep: Number,
    gi_others_pep: Number,
    mi_others_pep: Number,
    tot_others_pep : Number,


    f_tot2_acc: Number,
    gi_tot2_acc: Number,
    mi_tot2_acc: Number,
    ni_tot2_acc: Number,
    tot_tot2_acc: Number,
    k_tot2_pep: Number,
    gi_tot2_pep: Number,
    mi_tot2_pep: Number,
    tot_tot2_pep : Number,

  },

  // By type of traffic violation /////
  sheet14: {
    f_os_acc: Number,
    gi_os_acc: Number,
    mi_os_acc: Number,
    ni_os_acc: Number,
    tot_os_acc: Number,
    k_os_pep: Number,
    gi_os_pep: Number,
    mi_os_pep: Number,
    tot_os_pep : Number,

    f_dd_acc: Number,
    gi_dd_acc: Number,
    mi_dd_acc: Number,
    ni_dd_acc: Number,
    tot_dd_acc: Number,
    k_dd_pep: Number,
    gi_dd_pep: Number,
    mi_dd_pep: Number,
    tot_dd_pep : Number,

    f_driveonws_acc: Number,
    gi_driveonws_acc: Number,
    mi_driveonws_acc: Number,
    ni_driveonws_acc: Number,
    tot_driveonws_acc: Number,
    k_driveonws_pep: Number,
    gi_driveonws_pep: Number,
    mi_driveonws_pep: Number,
    tot_driveonws_pep : Number,

    f_jrl_acc: Number,
    gi_jrl_acc: Number,
    mi_jrl_acc: Number,
    ni_jrl_acc: Number,
    tot_jrl_acc: Number,
    k_jrl_pep: Number,
    gi_jrl_pep: Number,
    mi_jrl_pep: Number,
    tot_jrl_pep : Number,

    f_mobile_acc: Number,
    gi_mobile_acc: Number,
    mi_mobile_acc: Number,
    ni_mobile_acc: Number,
    tot_mobile_acc: Number,
    k_mobile_pep: Number,
    gi_mobile_pep: Number,
    mi_mobile_pep: Number,
    tot_mobile_pep : Number,

    f_others_acc: Number,
    gi_others_acc: Number,
    mi_others_acc: Number,
    ni_others_acc: Number,
    tot_others_acc: Number,
    k_others_pep: Number,
    gi_others_pep: Number,
    mi_others_pep: Number,
    tot_others_pep : Number,

    f_tot_acc: Number,
    gi_tot_acc: Number,
    mi_tot_acc: Number,
    ni_tot_acc: Number,
    tot_tot_acc: Number,
    k_tot_pep: Number,
    gi_tot_pep: Number,
    mi_tot_pep: Number,
    tot_tot_pep : Number,
  },

  // By non wearing on non safety feature ////
  sheet15: {
    k_tot_hel: Number,
    gi_tot_hel: Number,
    mi_tot_hel: Number,

    k_driv_hel: Number,
    gi_driv_hel: Number,
    mi_driv_hel: Number,

    k_pass_hel: Number,
    gi_pass_hel: Number,
    mi_pass_hel: Number,

    k_tot_sb: Number,
    gi_tot_sb: Number,
    mi_tot_sb: Number,

    k_driv_sb: Number,
    gi_driv_sb: Number,
    mi_driv_sb: Number,

    k_pass_sb: Number,
    gi_pass_sb: Number,
    mi_pass_sb: Number,
  },

  // By License of Drivers ////
  sheet16: {
    f_vpl: Number,
    gi_vpl: Number,
    mi_vpl: Number,
    ni_vpl: Number,
    tot_vpl: Number,

    f_ll: Number,
    gi_ll: Number,
    mi_ll: Number,
    ni_ll: Number,
    tot_ll: Number,

    f_wl: Number,
    gi_wl: Number,
    mi_wl: Number,
    ni_wl: Number,
    tot_wl: Number,

    f_notk: Number,
    gi_notk: Number,
    mi_notk: Number,
    ni_notk: Number,
    tot_notk: Number,

    f_tot: Number,
    gi_tot: Number,
    mi_tot: Number,
    ni_tot: Number,
    tot_tot: Number,
  },

  // By type of Road user ///
  sheet17: {
    k_ped_m: Number,
    k_ped_f: Number,
    gi_ped_m: Number,
    gi_ped_f: Number,
    mi_ped_m: Number,
    mi_ped_f: Number,
    tot_ped_m: Number,
    tot_ped_f: Number,

    k_byc_tot_m: Number,
    k_byc_tot_f: Number,
    gi_byc_tot_m: Number,
    gi_byc_tot_f: Number,
    mi_byc_tot_m: Number,
    mi_byc_tot_f: Number,
    tot_byc_tot_m: Number,
    tot_byc_tot_f: Number,

    k_byc_driv_m: Number,
    k_byc_driv_f: Number,
    gi_byc_driv_m: Number,
    gi_byc_driv_f: Number,
    mi_byc_driv_m: Number,
    mi_byc_driv_f: Number,
    tot_byc_driv_m: Number,
    tot_byc_driv_f: Number,

    k_byc_pass_m: Number,
    k_byc_pass_f: Number,
    gi_byc_pass_m: Number,
    gi_byc_pass_f: Number,
    mi_byc_pass_m: Number,
    mi_byc_pass_f: Number,
    tot_byc_pass_m: Number,
    tot_byc_pass_f: Number,

    k_2wh_tot_m: Number,
    k_2wh_tot_f: Number,
    gi_2wh_tot_m: Number,
    gi_2wh_tot_f: Number,
    mi_2wh_tot_m: Number,
    mi_2wh_tot_f: Number,
    tot_2wh_tot_m: Number,
    tot_2wh_tot_f: Number,

    k_2wh_driv_m: Number,
    k_2wh_driv_f: Number,
    gi_2wh_driv_m: Number,
    gi_2wh_driv_f: Number,
    mi_2wh_driv_m: Number,
    mi_2wh_driv_f: Number,
    tot_2wh_driv_m: Number,
    tot_2wh_driv_f: Number,

    k_2wh_pass_m: Number,
    k_2wh_pass_f: Number,
    gi_2wh_pass_m: Number,
    gi_2wh_pass_f: Number,
    mi_2wh_pass_m: Number,
    mi_2wh_pass_f: Number,
    tot_2wh_pass_m: Number,
    tot_2wh_pass_f: Number,

    k_rick_tot_m: Number,
    k_rick_tot_f: Number,
    gi_rick_tot_m: Number,
    gi_rick_tot_f: Number,
    mi_rick_tot_m: Number,
    mi_rick_tot_f: Number,
    tot_rick_tot_m: Number,
    tot_rick_tot_f: Number,

    k_rick_driv_m: Number,
    k_rick_driv_f: Number,
    gi_rick_driv_m: Number,
    gi_rick_driv_f: Number,
    mi_rick_driv_m: Number,
    mi_rick_driv_f: Number,
    tot_rick_driv_m: Number,
    tot_rick_driv_f: Number,

    k_rick_pass_m: Number,
    k_rick_pass_f: Number,
    gi_rick_pass_m: Number,
    gi_rick_pass_f: Number,
    mi_rick_pass_m: Number,
    mi_rick_pass_f: Number,
    tot_rick_pass_m: Number,
    tot_rick_pass_f: Number,

    k_4wh_tot_m: Number,
    k_4wh_tot_f: Number,
    gi_4wh_tot_m: Number,
    gi_4wh_tot_f: Number,
    mi_4wh_tot_m: Number,
    mi_4wh_tot_f: Number,
    tot_4wh_tot_m: Number,
    tot_4wh_tot_f: Number,

    k_4wh_driv_m: Number,
    k_4wh_driv_f: Number,
    gi_4wh_driv_m: Number,
    gi_4wh_driv_f: Number,
    mi_4wh_driv_m: Number,
    mi_4wh_driv_f: Number,
    tot_4wh_driv_m: Number,
    tot_4wh_driv_f: Number,

    k_4wh_pass_m: Number,
    k_4wh_pass_f: Number,
    gi_4wh_pass_m: Number,
    gi_4wh_pass_f: Number,
    mi_4wh_pass_m: Number,
    mi_4wh_pass_f: Number,
    tot_4wh_pass_m: Number,
    tot_4wh_pass_f: Number,

    k_truck_tot_m: Number,
    k_truck_tot_f: Number,
    gi_truck_tot_m: Number,
    gi_truck_tot_f: Number,
    mi_truck_tot_m: Number,
    mi_truck_tot_f: Number,
    tot_truck_tot_m: Number,
    tot_truck_tot_f: Number,

    k_truck_driv_m: Number,
    k_truck_driv_f: Number,
    gi_truck_driv_m: Number,
    gi_truck_driv_f: Number,
    mi_truck_driv_m: Number,
    mi_truck_driv_f: Number,
    tot_truck_driv_m: Number,
    tot_truck_driv_f: Number,

    k_truck_pass_m: Number,
    k_truck_pass_f: Number,
    gi_truck_pass_m: Number,
    gi_truck_pass_f: Number,
    mi_truck_pass_m: Number,
    mi_truck_pass_f: Number,
    tot_truck_pass_m: Number,
    tot_truck_pass_f: Number,

    k_bus_tot_m: Number,
    k_bus_tot_f: Number,
    gi_bus_tot_m: Number,
    gi_bus_tot_f: Number,
    mi_bus_tot_m: Number,
    mi_bus_tot_f: Number,
    tot_bus_tot_m: Number,
    tot_bus_tot_f: Number,

    k_bus_driv_m: Number,
    k_bus_driv_f: Number,
    gi_bus_driv_m: Number,
    gi_bus_driv_f: Number,
    mi_bus_driv_m: Number,
    mi_bus_driv_f: Number,
    tot_bus_driv_m: Number,
    tot_bus_driv_f: Number,

    k_bus_pass_m: Number,
    k_bus_pass_f: Number,
    gi_bus_pass_m: Number,
    gi_bus_pass_f: Number,
    mi_bus_pass_m: Number,
    mi_bus_pass_f: Number,
    tot_bus_pass_m: Number,
    tot_bus_pass_f: Number,

    k_omv_tot_m: Number,
    k_omv_tot_f: Number,
    gi_omv_tot_m: Number,
    gi_omv_tot_f: Number,
    mi_omv_tot_m: Number,
    mi_omv_tot_f: Number,
    tot_omv_tot_m: Number,
    tot_omv_tot_f: Number,

    k_omv_driv_m: Number,
    k_omv_driv_f: Number,
    gi_omv_driv_m: Number,
    gi_omv_driv_f: Number,
    mi_omv_driv_m: Number,
    mi_omv_driv_f: Number,
    tot_omv_driv_m: Number,
    tot_omv_driv_f: Number,

    k_omv_pass_m: Number,
    k_omv_pass_f: Number,
    gi_omv_pass_m: Number,
    gi_omv_pass_f: Number,
    mi_omv_pass_m: Number,
    mi_omv_pass_f: Number,
    tot_omv_pass_m: Number,
    tot_omv_pass_f: Number,

    k_tot_tot_m: Number,
    k_tot_tot_f: Number,
    gi_tot_tot_m: Number,
    gi_tot_tot_f: Number,
    mi_tot_tot_m: Number,
    mi_tot_tot_f: Number,
    tot_tot_tot_m: Number,
    tot_tot_tot_f: Number,

    k_tot_driv_m: Number,
    k_tot_driv_f: Number,
    gi_tot_driv_m: Number,
    gi_tot_driv_f: Number,
    mi_tot_driv_m: Number,
    mi_tot_driv_f: Number,
    tot_tot_driv_m: Number,
    tot_tot_driv_f: Number,

    k_tot_pass_m: Number,
    k_tot_pass_f: Number,
    gi_tot_pass_m: Number,
    gi_tot_pass_f: Number,
    mi_tot_pass_m: Number,
    mi_tot_pass_f: Number,
    tot_tot_pass_m: Number,
    tot_tot_pass_f: Number,
  },
  // By type of victim , age and sex ////
  sheet18: {
    k_tot_m_driv: Number,
    k_tot_f_driv: Number,
    in_tot_m_driv: Number,
    in_tot_f_driv: Number,

    k_18_m_driv: Number,
    k_18_f_driv: Number,
    in_18_m_driv: Number,
    in_18_f_driv: Number,

    k_1825_m_driv: Number,
    k_1825_f_driv: Number,
    in_1825_m_driv: Number,
    in_1825_f_driv: Number,

    k_2535_m_driv: Number,
    k_2535_f_driv: Number,
    in_2535_m_driv: Number,
    in_2535_f_driv: Number,

    k_3545_m_driv: Number,
    k_3545_f_driv: Number,
    in_3545_m_driv: Number,
    in_3545_f_driv: Number,

    k_4560_m_driv: Number,
    k_4560_f_driv: Number,
    in_4560_m_driv: Number,
    in_4560_f_driv: Number,

    k_60_m_driv: Number,
    k_60_f_driv: Number,
    in_60_m_driv: Number,
    in_60_f_driv: Number,

    k_notk_m_driv: Number,
    k_notk_f_driv: Number,
    in_notk_m_driv: Number,
    in_notk_f_driv: Number,

    /////////////////////////////////

    k_tot_m_pass: Number,
    k_tot_f_pass: Number,
    in_tot_m_pass: Number,
    in_tot_f_pass: Number,

    k_18_m_pass: Number,
    k_18_f_pass: Number,
    in_18_m_pass: Number,
    in_18_f_pass: Number,

    k_1825_m_pass: Number,
    k_1825_f_pass: Number,
    in_1825_m_pass: Number,
    in_1825_f_pass: Number,

    k_2535_m_pass: Number,
    k_2535_f_pass: Number,
    in_2535_m_pass: Number,
    in_2535_f_pass: Number,

    k_3545_m_pass: Number,
    k_3545_f_pass: Number,
    in_3545_m_pass: Number,
    in_3545_f_pass: Number,

    k_4560_m_pass: Number,
    k_4560_f_pass: Number,
    in_4560_m_pass: Number,
    in_4560_f_pass: Number,

    k_60_m_pass: Number,
    k_60_f_pass: Number,
    in_60_m_pass: Number,
    in_60_f_pass: Number,

    k_notk_m_pass: Number,
    k_notk_f_pass: Number,
    in_notk_m_pass: Number,
    in_notk_f_pass: Number,

    //////////////////////////////

    k_tot_m_ped: Number,
    k_tot_f_ped: Number,
    in_tot_m_ped: Number,
    in_tot_f_ped: Number,

    k_18_m_ped: Number,
    k_18_f_ped: Number,
    in_18_m_ped: Number,
    in_18_f_ped: Number,

    k_1825_m_ped: Number,
    k_1825_f_ped: Number,
    in_1825_m_ped: Number,
    in_1825_f_ped: Number,

    k_2535_m_ped: Number,
    k_2535_f_ped: Number,
    in_2535_m_ped: Number,
    in_2535_f_ped: Number,

    k_3545_m_ped: Number,
    k_3545_f_ped: Number,
    in_3545_m_ped: Number,
    in_3545_f_ped: Number,

    k_4560_m_ped: Number,
    k_4560_f_ped: Number,
    in_4560_m_ped: Number,
    in_4560_f_ped: Number,

    k_60_m_ped: Number,
    k_60_f_ped: Number,
    in_60_m_ped: Number,
    in_60_f_ped: Number,

    k_notk_m_ped: Number,
    k_notk_f_ped: Number,
    in_notk_m_ped: Number,
    in_notk_f_ped: Number,

    //////////////////////////////

    k_tot_m_cyc: Number,
    k_tot_f_cyc: Number,
    in_tot_m_cyc: Number,
    in_tot_f_cyc: Number,

    k_18_m_cyc: Number,
    k_18_f_cyc: Number,
    in_18_m_cyc: Number,
    in_18_f_cyc: Number,

    k_1825_m_cyc: Number,
    k_1825_f_cyc: Number,
    in_1825_m_cyc: Number,
    in_1825_f_cyc: Number,

    k_2535_m_cyc: Number,
    k_2535_f_cyc: Number,
    in_2535_m_cyc: Number,
    in_2535_f_cyc: Number,

    k_3545_m_cyc: Number,
    k_3545_f_cyc: Number,
    in_3545_m_cyc: Number,
    in_3545_f_cyc: Number,

    k_4560_m_cyc: Number,
    k_4560_f_cyc: Number,
    in_4560_m_cyc: Number,
    in_4560_f_cyc: Number,

    k_60_m_cyc: Number,
    k_60_f_cyc: Number,
    in_60_m_cyc: Number,
    in_60_f_cyc: Number,

    k_notk_m_cyc: Number,
    k_notk_f_cyc: Number,
    in_notk_m_cyc: Number,
    in_notk_f_cyc: Number,

    ///////////////////////////////

    k_tot_m_tot: Number,
    k_tot_f_tot: Number,
    in_tot_m_tot: Number,
    in_tot_f_tot: Number,

    k_18_m_tot: Number,
    k_18_f_tot: Number,
    in_18_m_tot: Number,
    in_18_f_tot: Number,

    k_1825_m_tot: Number,
    k_1825_f_tot: Number,
    in_1825_m_tot: Number,
    in_1825_f_tot: Number,

    k_2535_m_tot: Number,
    k_2535_f_tot: Number,
    in_2535_m_tot: Number,
    in_2535_f_tot: Number,

    k_3545_m_tot: Number,
    k_3545_f_tot: Number,
    in_3545_m_tot: Number,
    in_3545_f_tot: Number,

    k_4560_m_tot: Number,
    k_4560_f_tot: Number,
    in_4560_m_tot: Number,
    in_4560_f_tot: Number,

    k_60_m_tot: Number,
    k_60_f_tot: Number,
    in_60_m_tot: Number,
    in_60_f_tot: Number,

    k_notk_m_tot: Number,
    k_notk_f_tot: Number,
    in_notk_m_tot: Number,
    in_notk_f_tot: Number,
  },
  // By type of highway ////
  sheet19: {
    tot_nh: Number,
    k_nh: Number,

    tot_sh: Number,
    k_sh: Number,

    tot_other: Number,
    k_other: Number,

    tot_tot: Number,
    k_tot: Number,
  },
  // By type of person killed on National highways////
  sheet20: {
    ped_acc_nh: Number,
    ped_pep_nh: Number,
    ped_acc_sh: Number,
    ped_pep_sh: Number,
    ped_acc_oth: Number,
    ped_pep_oth: Number,

    bcy_acc_nh: Number,
    bcy_pep_nh: Number,
    bcy_acc_sh: Number,
    bcy_pep_sh: Number,
    bcy_acc_oth: Number,
    bcy_pep_oth: Number,

    twoWH_acc_nh: Number,
    twoWH_pep_nh: Number,
    twoWH_acc_sh: Number,
    twoWH_pep_sh: Number,
    twoWH_acc_oth: Number,
    twoWH_pep_oth: Number,

    rick_acc_nh: Number,
    rick_pep_nh: Number,
    rick_acc_sh: Number,
    rick_pep_sh: Number,
    rick_acc_oth: Number,
    rick_pep_oth: Number,

    fourWH_acc_nh: Number,
    fourWH_pep_nh: Number,
    fourWH_acc_sh: Number,
    fourWH_pep_sh: Number,
    fourWH_acc_oth: Number,
    fourWH_pep_oth: Number,

    truck_acc_nh: Number,
    truck_pep_nh: Number,
    truck_acc_sh: Number,
    truck_pep_sh: Number,
    truck_acc_oth: Number,
    truck_pep_oth: Number,

    bus_acc_nh: Number,
    bus_pep_nh: Number,
    bus_acc_sh: Number,
    bus_pep_sh: Number,
    bus_acc_oth: Number,
    bus_pep_oth: Number,

    others_acc_nh: Number,
    others_pep_nh: Number,
    others_acc_sh: Number,
    others_pep_sh: Number,
    others_acc_oth: Number,
    others_pep_oth: Number,

    tot_acc_nh: Number,
    tot_pep_nh: Number,
    tot_acc_sh: Number,
    tot_pep_sh: Number,
    tot_acc_oth: Number,
    tot_pep_oth: Number,
  },
  // By type of traffic violation on National highways////
  sheet21: {
    os_acc_nh: Number,
    os_pep_nh: Number,
    os_acc_sh: Number,
    os_pep_sh: Number,
    os_acc_oth: Number,
    os_pep_oth: Number,

    dd_acc_nh: Number,
    dd_pep_nh: Number,
    dd_acc_sh: Number,
    dd_pep_sh: Number,
    dd_acc_oth: Number,
    dd_pep_oth: Number,

    driveoWS_acc_nh: Number,
    driveoWS_pep_nh: Number,
    driveoWS_acc_sh: Number,
    driveoWS_pep_sh: Number,
    driveoWS_acc_oth: Number,
    driveoWS_pep_oth: Number,

    jrl_acc_nh: Number,
    jrl_pep_nh: Number,
    jrl_acc_sh: Number,
    jrl_pep_sh: Number,
    jrl_acc_oth: Number,
    jrl_pep_oth: Number,

    mobile_acc_nh: Number,
    mobile_pep_nh: Number,
    mobile_acc_sh: Number,
    mobile_pep_sh: Number,
    mobile_acc_oth: Number,
    mobile_pep_oth: Number,

    others_acc_nh: Number,
    others_pep_nh: Number,
    others_acc_sh: Number,
    others_pep_sh: Number,
    others_acc_oth: Number,
    others_pep_oth: Number,

    tot_acc_nh: Number,
    tot_pep_nh: Number,
    tot_acc_sh: Number,
    tot_pep_sh: Number,
    tot_acc_oth: Number,
    tot_pep_oth: Number,
  },
});

const Year = new mongoose.model("year", yearSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/registeradmin@123456789", function (req, res) {
  res.render("register");
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
app.get("/view", function (req, res) {
  res.render("view");
});
app.get("/compose", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("compose");
  } else {
    res.render("login");
  }
});
app.get("/BS", function (req, res) {
  res.render("BS");
});
app.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req,res , function() {
        res.redirect("compose");
      });
    }
  });
});
app.post("/view", function (req, res) {
  let year = req.body.choose_year;
  let option = req.body.sort1;
  let spot = req.body.spot1;
  if (!year || !option || !spot) {
    res.send("Please enter valid details");
  }
   else if (year == 2018) {
    if (option == "year") {
      res.render(year + "_" + spot + "/sheet1");
    }
    if (option == "area_time") {
      res.render(year + "_" + spot + "/sheet2");
    }
    if (option == "weather") {
      res.render(year + "_" + spot + "/sheet3");
    }
    if (option == "roads") {
      res.render(year + "_" + spot + "/sheet4");
    }
    if (option == "environment") {
      res.render(year + "_" + spot + "/sheet5");
    }
    if (option == "features") {
      res.render(year + "_" + spot + "/sheet6");
    }
    if (option == "jnc_type") {
      res.render(year + "_" + spot + "/sheet7");
    }
    if (option == "traffic_control") {
      res.render(year + "_" + spot + "/sheet8");
    }
    if (option == "ped_infra") {
      res.render(year + "_" + spot + "/sheet9");
    }
    if (option == "vehicles") {
      res.render(year + "_" + spot + "/sheet10");
    }
    if (option == "age_vehicles") {
      res.render(year + "_" + spot + "/sheet11");
    }
    if (option == "load") {
      res.render(year + "_" + spot + "/sheet12");
    }
    if (option == "type_collision") {
      res.render(year + "_" + spot + "/sheet13");
    }
    if (option == "traffic_violations") {
      res.render(year + "_" + spot + "/sheet14");
    }
    if (option == "safety") {
      res.render(year + "_" + spot + "/sheet15");
    }
    if (option == "license") {
      res.render(year + "_" + spot + "/sheet16");
    }
    if (option == "type_user") {
      res.render(year + "_" + spot + "/sheet17");
    }
    if (option == "type_adv") {
      res.render(year + "_" + spot + "/sheet18");
    } else if (
      option == "highway" ||
      option == "highway_people" ||
      option == "highway_traffic"
    ) {
      res.send(
        "This data is only available from 2019 onwards . Kindly re-fill the form with valid details"
      );
    }
  } else if(year == 2019 || year ==2020) {
    if (option == "year") {
      res.render(year + "_" + spot + "/1");
    }
    if (option == "area_time") {
      res.render(year + "_" + spot + "/2");
    }
    if (option == "weather") {
      res.render(year + "_" + spot + "/3");
    }
    if (option == "roads") {
      res.render(year + "_" + spot + "/4");
    }
    if (option == "environment") {
      res.render(year + "_" + spot + "/5");
    }
    if (option == "features") {
      res.render(year + "_" + spot + "/6");
    }
    if (option == "jnc_type") {
      res.render(year + "_" + spot + "/7");
    }
    if (option == "traffic_control") {
      res.render(year + "_" + spot + "/8");
    }
    if (option == "ped_infra") {
      res.render(year + "_" + spot + "/9");
    }
    if (option == "vehicles") {
      res.render(year + "_" + spot + "/10");
    }
    if (option == "age_vehicles") {
      res.render(year + "_" + spot + "/11");
    }
    if (option == "load") {
      res.render(year + "_" + spot + "/12");
    }
    if (option == "type_collision") {
      res.render(year + "_" + spot + "/13");
    }
    if (option == "traffic_violations") {
      res.render(year + "_" + spot + "/14");
    }
    if (option == "safety") {
      res.render(year + "_" + spot + "/15");
    }
    if (option == "license") {
      res.render(year + "_" + spot + "/16");
    }
    if (option == "type_user") {
      res.render(year + "_" + spot + "/17");
    }
    if (option == "type_adv") {
      res.render(year + "_" + spot + "/18");
    }
    if (option == "highway") {
      res.render(year + "_" + spot + "/19");
    }
    if (option == "highway_people") {
      res.render(year + "_" + spot + "/20");
    }
    if (option == "highway_traffic") {
      res.render(year + "_" + spot + "/21");
    }
  }
  else{
    Year.findOne({year : year , spot : spot} , function(err ,found){
      if(err){
        console.log(err);
      }
      else{
        if(option == "year"){
          res.render("2018_west/sheet1" , {"f_jan_acc" : found.sheet1.f_jan_acc , "gi_jan_acc" : found.sheet1.gi_jan_acc , "mi_jan_acc" : found.sheet1.mi_jan_acc , "ni_jan_acc" : found.sheet1.ni_jan_acc , "tot_jan_acc" : found.sheet1.tot_jan_acc , "kil_jan_pep" : found.sheet1.kil_jan_pep, "gi_jan_pep" : found.sheet1.gi_jan_pep, "tot_jan_pep" : found.sheet1.tot_jan_pep, "mi_jan_pep" : found.sheet1.mi_jan_pep ,
          "f_feb_acc" : found.sheet1.f_feb_acc , "gi_feb_acc" : found.sheet1.gi_feb_acc , "mi_feb_acc" : found.sheet1.mi_feb_acc , "ni_feb_acc" : found.sheet1.ni_feb_acc , "tot_feb_acc" : found.sheet1.tot_feb_acc , "kil_feb_pep" : found.sheet1.kil_feb_pep, "gi_feb_pep" : found.sheet1.gi_feb_pep, "tot_feb_pep" : found.sheet1.tot_feb_pep, "mi_feb_pep" : found.sheet1.mi_feb_pep ,
           "f_mar_acc" : found.sheet1.f_mar_acc , "gi_mar_acc" : found.sheet1.gi_mar_acc , "mi_mar_acc" : found.sheet1.mi_mar_acc , "ni_mar_acc" : found.sheet1.ni_mar_acc , "tot_mar_acc" : found.sheet1.tot_mar_acc , "kil_mar_pep" : found.sheet1.kil_mar_pep, "gi_mar_pep" : found.sheet1.gi_mar_pep, "tot_mar_pep" : found.sheet1.tot_mar_pep, "mi_mar_pep" : found.sheet1.mi_mar_pep ,
            "f_apr_acc" : found.sheet1.f_apr_acc , "gi_apr_acc" : found.sheet1.gi_apr_acc , "mi_apr_acc" : found.sheet1.mi_apr_acc , "ni_apr_acc" : found.sheet1.ni_apr_acc , "tot_apr_acc" : found.sheet1.tot_apr_acc , "kil_apr_pep" : found.sheet1.kil_apr_pep, "gi_apr_pep" : found.sheet1.gi_apr_pep, "tot_apr_pep" : found.sheet1.tot_apr_pep, "mi_apr_pep" : found.sheet1.mi_apr_pep,
            "f_may_acc" : found.sheet1.f_may_acc , "gi_may_acc" : found.sheet1.gi_may_acc , "mi_may_acc" : found.sheet1.mi_may_acc , "ni_may_acc" : found.sheet1.ni_may_acc , "tot_may_acc" : found.sheet1.tot_may_acc , "kil_may_pep" : found.sheet1.kil_may_pep, "gi_may_pep" : found.sheet1.gi_may_pep, "tot_may_pep" : found.sheet1.tot_may_pep, "mi_may_pep" : found.sheet1.mi_may_pep,
            "f_jun_acc" : found.sheet1.f_jun_acc , "gi_jun_acc" : found.sheet1.gi_jun_acc , "mi_jun_acc" : found.sheet1.mi_jun_acc , "ni_jun_acc" : found.sheet1.ni_jun_acc , "tot_jun_acc" : found.sheet1.tot_jun_acc , "kil_jun_pep" : found.sheet1.kil_jun_pep, "gi_jun_pep" : found.sheet1.gi_jun_pep, "tot_jun_pep" : found.sheet1.tot_jun_pep, "mi_jun_pep" : found.sheet1.mi_jun_pep,
            "f_jul_acc" : found.sheet1.f_jul_acc , "gi_jul_acc" : found.sheet1.gi_jul_acc , "mi_jul_acc" : found.sheet1.mi_jul_acc , "ni_jul_acc" : found.sheet1.ni_jul_acc , "tot_jul_acc" : found.sheet1.tot_jul_acc , "kil_jul_pep" : found.sheet1.kil_jul_pep, "gi_jul_pep" : found.sheet1.gi_jul_pep, "tot_jul_pep" : found.sheet1.tot_jul_pep, "mi_jul_pep" : found.sheet1.mi_jul_pep,
            "f_aug_acc" : found.sheet1.f_aug_acc , "gi_aug_acc" : found.sheet1.gi_aug_acc , "mi_aug_acc" : found.sheet1.mi_aug_acc , "ni_aug_acc" : found.sheet1.ni_aug_acc , "tot_aug_acc" : found.sheet1.tot_aug_acc , "kil_aug_pep" : found.sheet1.kil_aug_pep, "gi_aug_pep" : found.sheet1.gi_aug_pep, "tot_aug_pep" : found.sheet1.tot_aug_pep, "mi_aug_pep" : found.sheet1.mi_aug_pep,
            "f_sep_acc" : found.sheet1.f_sep_acc , "gi_sep_acc" : found.sheet1.gi_sep_acc , "mi_sep_acc" : found.sheet1.mi_sep_acc , "ni_sep_acc" : found.sheet1.ni_sep_acc , "tot_sep_acc" : found.sheet1.tot_sep_acc , "kil_sep_pep" : found.sheet1.kil_sep_pep, "gi_sep_pep" : found.sheet1.gi_sep_pep, "tot_sep_pep" : found.sheet1.tot_sep_pep, "mi_sep_pep" : found.sheet1.mi_sep_pep,
            "f_oct_acc" : found.sheet1.f_oct_acc , "gi_oct_acc" : found.sheet1.gi_oct_acc , "mi_oct_acc" : found.sheet1.mi_oct_acc , "ni_oct_acc" : found.sheet1.ni_oct_acc , "tot_oct_acc" : found.sheet1.tot_oct_acc , "kil_oct_pep" : found.sheet1.kil_oct_pep, "gi_oct_pep" : found.sheet1.gi_oct_pep, "tot_oct_pep" : found.sheet1.tot_oct_pep, "mi_oct_pep" : found.sheet1.mi_oct_pep,
            "f_nov_acc" : found.sheet1.f_nov_acc , "gi_nov_acc" : found.sheet1.gi_nov_acc , "mi_nov_acc" : found.sheet1.mi_nov_acc , "ni_nov_acc" : found.sheet1.ni_nov_acc , "tot_nov_acc" : found.sheet1.tot_nov_acc , "kil_nov_pep" : found.sheet1.kil_nov_pep, "gi_nov_pep" : found.sheet1.gi_nov_pep, "tot_nov_pep" : found.sheet1.tot_nov_pep, "mi_nov_pep" : found.sheet1.mi_nov_pep,
            "f_dec_acc" : found.sheet1.f_dec_acc , "gi_dec_acc" : found.sheet1.gi_dec_acc , "mi_dec_acc" : found.sheet1.mi_dec_acc , "ni_dec_acc" : found.sheet1.ni_dec_acc , "tot_dec_acc" : found.sheet1.tot_dec_acc , "kil_dec_pep" : found.sheet1.kil_dec_pep, "gi_dec_pep" : found.sheet1.gi_dec_pep, "tot_dec_pep" : found.sheet1.tot_dec_pep, "mi_dec_pep" : found.sheet1.mi_dec_pep,
            "f_tot_acc" : found.sheet1.f_tot_acc , "gi_tot_acc" : found.sheet1.gi_tot_acc , "mi_tot_acc" : found.sheet1.mi_tot_acc , "ni_tot_acc" : found.sheet1.ni_tot_acc , "tot_tot_acc" : found.sheet1.tot_tot_acc , "kil_tot_pep" : found.sheet1.kil_tot_pep, "gi_tot_pep" : found.sheet1.gi_tot_pep, "tot_tot_pep" : found.sheet1.tot_tot_pep, "mi_tot_pep" : found.sheet1.mi_tot_pep
        })
        }
        if(option == "area_time"){
          res.render("2018_west/sheet2" , {"f_urb_69_acc" :found.sheet2.f_urb_69_acc ,"gi_urb_69_acc" : found.sheet2.gi_urb_69_acc ,"mi_urb_69_acc" : found.sheet2.mi_urb_69_acc , "ni_urb_69_acc" : found.sheet2.ni_urb_69_acc , "tot_urb_69_acc" : found.sheet2.tot_urb_69_acc , "kil_urb_69_pep" : found.sheet2.kil_urb_69_pep ,"gi_urb_69_pep" : found.sheet2.gi_urb_69_pep , "mi_urb_69_pep" : found.sheet2.mi_urb_69_pep,"tot_urb_69_pep" : found.sheet2.tot_urb_69_pep ,
          "f_rur_69_acc" :found.sheet2.f_rur_69_acc ,"gi_rur_69_acc" : found.sheet2.gi_rur_69_acc ,"mi_rur_69_acc" : found.sheet2.mi_rur_69_acc , "ni_rur_69_acc" : found.sheet2.ni_rur_69_acc , "tot_rur_69_acc" : found.sheet2.tot_rur_69_acc , "kil_rur_69_pep" : found.sheet2.kil_rur_69_pep ,"gi_rur_69_pep" : found.sheet2.gi_rur_69_pep , "mi_rur_69_pep" : found.sheet2.mi_rur_69_pep,"tot_rur_69_pep" : found.sheet2.tot_rur_69_pep,

          "f_urb_912_acc" :found.sheet2.f_urb_912_acc ,"gi_urb_912_acc" : found.sheet2.gi_urb_912_acc ,"mi_urb_912_acc" : found.sheet2.mi_urb_912_acc , "ni_urb_912_acc" : found.sheet2.ni_urb_912_acc , "tot_urb_912_acc" : found.sheet2.tot_urb_912_acc , "kil_urb_912_pep" : found.sheet2.kil_urb_912_pep ,"gi_urb_912_pep" : found.sheet2.gi_urb_912_pep , "mi_urb_912_pep" : found.sheet2.mi_urb_912_pep,"tot_urb_912_pep" : found.sheet2.tot_urb_912_pep ,
          "f_rur_912_acc" :found.sheet2.f_rur_912_acc ,"gi_rur_912_acc" : found.sheet2.gi_rur_912_acc ,"mi_rur_912_acc" : found.sheet2.mi_rur_912_acc , "ni_rur_912_acc" : found.sheet2.ni_rur_912_acc , "tot_rur_912_acc" : found.sheet2.tot_rur_912_acc , "kil_rur_912_pep" : found.sheet2.kil_rur_912_pep ,"gi_rur_912_pep" : found.sheet2.gi_rur_912_pep , "mi_rur_912_pep" : found.sheet2.mi_rur_912_pep,"tot_rur_912_pep" : found.sheet2.tot_rur_912_pep,

          "f_urb_1215_acc" :found.sheet2.f_urb_1215_acc ,"gi_urb_1215_acc" : found.sheet2.gi_urb_1215_acc ,"mi_urb_1215_acc" : found.sheet2.mi_urb_1215_acc , "ni_urb_1215_acc" : found.sheet2.ni_urb_1215_acc , "tot_urb_1215_acc" : found.sheet2.tot_urb_1215_acc , "kil_urb_1215_pep" : found.sheet2.kil_urb_1215_pep ,"gi_urb_1215_pep" : found.sheet2.gi_urb_1215_pep , "mi_urb_1215_pep" : found.sheet2.mi_urb_1215_pep,"tot_urb_1215_pep" : found.sheet2.tot_urb_1215_pep ,
          "f_rur_1215_acc" :found.sheet2.f_rur_1215_acc ,"gi_rur_1215_acc" : found.sheet2.gi_rur_1215_acc ,"mi_rur_1215_acc" : found.sheet2.mi_rur_1215_acc , "ni_rur_1215_acc" : found.sheet2.ni_rur_1215_acc , "tot_rur_1215_acc" : found.sheet2.tot_rur_1215_acc , "kil_rur_1215_pep" : found.sheet2.kil_rur_1215_pep ,"gi_rur_1215_pep" : found.sheet2.gi_rur_1215_pep , "mi_rur_1215_pep" : found.sheet2.mi_rur_1215_pep,"tot_rur_1215_pep" : found.sheet2.tot_rur_1215_pep,

          "f_urb_1518_acc" :found.sheet2.f_urb_1518_acc ,"gi_urb_1518_acc" : found.sheet2.gi_urb_1518_acc ,"mi_urb_1518_acc" : found.sheet2.mi_urb_1518_acc , "ni_urb_1518_acc" : found.sheet2.ni_urb_1518_acc , "tot_urb_1518_acc" : found.sheet2.tot_urb_1518_acc , "kil_urb_1518_pep" : found.sheet2.kil_urb_1518_pep ,"gi_urb_1518_pep" : found.sheet2.gi_urb_1518_pep , "mi_urb_1518_pep" : found.sheet2.mi_urb_1518_pep,"tot_urb_1518_pep" : found.sheet2.tot_urb_1518_pep ,
          "f_rur_1518_acc" :found.sheet2.f_rur_1518_acc ,"gi_rur_1518_acc" : found.sheet2.gi_rur_1518_acc ,"mi_rur_1518_acc" : found.sheet2.mi_rur_1518_acc , "ni_rur_1518_acc" : found.sheet2.ni_rur_1518_acc , "tot_rur_1518_acc" : found.sheet2.tot_rur_1518_acc , "kil_rur_1518_pep" : found.sheet2.kil_rur_1518_pep ,"gi_rur_1518_pep" : found.sheet2.gi_rur_1518_pep , "mi_rur_1518_pep" : found.sheet2.mi_rur_1518_pep,"tot_rur_1518_pep" : found.sheet2.tot_rur_1518_pep,

          "f_urb_1821_acc" :found.sheet2.f_urb_1821_acc ,"gi_urb_1821_acc" : found.sheet2.gi_urb_1821_acc ,"mi_urb_1821_acc" : found.sheet2.mi_urb_1821_acc , "ni_urb_1821_acc" : found.sheet2.ni_urb_1821_acc , "tot_urb_1821_acc" : found.sheet2.tot_urb_1821_acc , "kil_urb_1821_pep" : found.sheet2.kil_urb_1821_pep ,"gi_urb_1821_pep" : found.sheet2.gi_urb_1821_pep , "mi_urb_1821_pep" : found.sheet2.mi_urb_1821_pep,"tot_urb_1821_pep" : found.sheet2.tot_urb_1821_pep ,
          "f_rur_1821_acc" :found.sheet2.f_rur_1821_acc ,"gi_rur_1821_acc" : found.sheet2.gi_rur_1821_acc ,"mi_rur_1821_acc" : found.sheet2.mi_rur_1821_acc , "ni_rur_1821_acc" : found.sheet2.ni_rur_1821_acc , "tot_rur_1821_acc" : found.sheet2.tot_rur_1821_acc , "kil_rur_1821_pep" : found.sheet2.kil_rur_1821_pep ,"gi_rur_1821_pep" : found.sheet2.gi_rur_1821_pep , "mi_rur_1821_pep" : found.sheet2.mi_rur_1821_pep,"tot_rur_1821_pep" : found.sheet2.tot_rur_1821_pep,

          "f_urb_2124_acc" :found.sheet2.f_urb_2124_acc ,"gi_urb_2124_acc" : found.sheet2.gi_urb_2124_acc ,"mi_urb_2124_acc" : found.sheet2.mi_urb_2124_acc , "ni_urb_2124_acc" : found.sheet2.ni_urb_2124_acc , "tot_urb_2124_acc" : found.sheet2.tot_urb_2124_acc , "kil_urb_2124_pep" : found.sheet2.kil_urb_2124_pep ,"gi_urb_2124_pep" : found.sheet2.gi_urb_2124_pep , "mi_urb_2124_pep" : found.sheet2.mi_urb_2124_pep,"tot_urb_2124_pep" : found.sheet2.tot_urb_2124_pep ,
          "f_rur_2124_acc" :found.sheet2.f_rur_2124_acc ,"gi_rur_2124_acc" : found.sheet2.gi_rur_2124_acc ,"mi_rur_2124_acc" : found.sheet2.mi_rur_2124_acc , "ni_rur_2124_acc" : found.sheet2.ni_rur_2124_acc , "tot_rur_2124_acc" : found.sheet2.tot_rur_2124_acc , "kil_rur_2124_pep" : found.sheet2.kil_rur_2124_pep ,"gi_rur_2124_pep" : found.sheet2.gi_rur_2124_pep , "mi_rur_2124_pep" : found.sheet2.mi_rur_2124_pep,"tot_rur_2124_pep" : found.sheet2.tot_rur_2124_pep,

          "f_urb_003_acc" :found.sheet2.f_urb_003_acc ,"gi_urb_003_acc" : found.sheet2.gi_urb_003_acc ,"mi_urb_003_acc" : found.sheet2.mi_urb_003_acc , "ni_urb_003_acc" : found.sheet2.ni_urb_003_acc , "tot_urb_003_acc" : found.sheet2.tot_urb_003_acc , "kil_urb_003_pep" : found.sheet2.kil_urb_003_pep ,"gi_urb_003_pep" : found.sheet2.gi_urb_003_pep , "mi_urb_003_pep" : found.sheet2.mi_urb_003_pep,"tot_urb_003_pep" : found.sheet2.tot_urb_003_pep ,
          "f_rur_003_acc" :found.sheet2.f_rur_003_acc ,"gi_rur_003_acc" : found.sheet2.gi_rur_003_acc ,"mi_rur_003_acc" : found.sheet2.mi_rur_003_acc , "ni_rur_003_acc" : found.sheet2.ni_rur_003_acc , "tot_rur_003_acc" : found.sheet2.tot_rur_003_acc , "kil_rur_003_pep" : found.sheet2.kil_rur_003_pep ,"gi_rur_003_pep" : found.sheet2.gi_rur_003_pep , "mi_rur_003_pep" : found.sheet2.mi_rur_003_pep,"tot_rur_003_pep" : found.sheet2.tot_rur_003_pep,

          "f_urb_36_acc" :found.sheet2.f_urb_36_acc ,"gi_urb_36_acc" : found.sheet2.gi_urb_36_acc ,"mi_urb_36_acc" : found.sheet2.mi_urb_36_acc , "ni_urb_36_acc" : found.sheet2.ni_urb_36_acc , "tot_urb_36_acc" : found.sheet2.tot_urb_36_acc , "kil_urb_36_pep" : found.sheet2.kil_urb_36_pep ,"gi_urb_36_pep" : found.sheet2.gi_urb_36_pep , "mi_urb_36_pep" : found.sheet2.mi_urb_36_pep,"tot_urb_36_pep" : found.sheet2.tot_urb_36_pep ,
          "f_rur_36_acc" :found.sheet2.f_rur_36_acc ,"gi_rur_36_acc" : found.sheet2.gi_rur_36_acc ,"mi_rur_36_acc" : found.sheet2.mi_rur_36_acc , "ni_rur_36_acc" : found.sheet2.ni_rur_36_acc , "tot_rur_36_acc" : found.sheet2.tot_rur_36_acc , "kil_rur_36_pep" : found.sheet2.kil_rur_36_pep ,"gi_rur_36_pep" : found.sheet2.gi_rur_36_pep , "mi_rur_36_pep" : found.sheet2.mi_rur_36_pep,"tot_rur_36_pep" : found.sheet2.tot_rur_36_pep,
          
          "f_urb_unk_acc" :found.sheet2.f_urb_unk_acc ,"gi_urb_unk_acc" : found.sheet2.gi_urb_unk_acc ,"mi_urb_unk_acc" : found.sheet2.mi_urb_unk_acc , "ni_urb_unk_acc" : found.sheet2.ni_urb_unk_acc , "tot_urb_unk_acc" : found.sheet2.tot_urb_unk_acc , "kil_urb_unk_pep" : found.sheet2.kil_urb_unk_pep ,"gi_urb_unk_pep" : found.sheet2.gi_urb_unk_pep , "mi_urb_unk_pep" : found.sheet2.mi_urb_unk_pep,"tot_urb_unk_pep" : found.sheet2.tot_urb_unk_pep ,
          "f_rur_unk_acc" :found.sheet2.f_rur_unk_acc ,"gi_rur_unk_acc" : found.sheet2.gi_rur_unk_acc ,"mi_rur_unk_acc" : found.sheet2.mi_rur_unk_acc , "ni_rur_unk_acc" : found.sheet2.ni_rur_unk_acc , "tot_rur_unk_acc" : found.sheet2.tot_rur_unk_acc , "kil_rur_unk_pep" : found.sheet2.kil_rur_unk_pep ,"gi_rur_unk_pep" : found.sheet2.gi_rur_unk_pep , "mi_rur_unk_pep" : found.sheet2.mi_rur_unk_pep,"tot_rur_unk_pep" : found.sheet2.tot_rur_unk_pep,

          "f_urb_tot_acc" :found.sheet2.f_urb_tot_acc ,"gi_urb_tot_acc" : found.sheet2.gi_urb_tot_acc ,"mi_urb_tot_acc" : found.sheet2.mi_urb_tot_acc , "ni_urb_tot_acc" : found.sheet2.ni_urb_tot_acc , "tot_urb_tot_acc" : found.sheet2.tot_urb_tot_acc , "kil_urb_tot_pep" : found.sheet2.kil_urb_tot_pep ,"gi_urb_tot_pep" : found.sheet2.gi_urb_tot_pep , "mi_urb_tot_pep" : found.sheet2.mi_urb_tot_pep,"tot_urb_tot_pep" : found.sheet2.tot_urb_tot_pep ,
          "f_rur_tot_acc" :found.sheet2.f_rur_tot_acc ,"gi_rur_tot_acc" : found.sheet2.gi_rur_tot_acc ,"mi_rur_tot_acc" : found.sheet2.mi_rur_tot_acc , "ni_rur_tot_acc" : found.sheet2.ni_rur_tot_acc , "tot_rur_tot_acc" : found.sheet2.tot_rur_tot_acc , "kil_rur_tot_pep" : found.sheet2.kil_rur_tot_pep ,"gi_rur_tot_pep" : found.sheet2.gi_rur_tot_pep , "mi_rur_tot_pep" : found.sheet2.mi_rur_tot_pep,"tot_rur_tot_pep" : found.sheet2.tot_rur_tot_pep,
        })
        }
        if(option == "weather"){
          res.render("2018_west/sheet3" , {"f_sun_acc" :found.sheet3.f_sun_acc ,"gi_sun_acc" :found.sheet3.gi_sun_acc ,"mi_sun_acc" :found.sheet3.mi_sun_acc , "ni_sun_acc" :found.sheet3.ni_sun_acc , "tot_sun_acc" :found.sheet3.tot_sun_acc , "kil_sun_pep" : found.sheet3.kil_sun_pep ,"gi_sun_pep" : found.sheet3.gi_sun_pep ,"mi_sun_pep" : found.sheet3.mi_sun_pep ,"tot_sun_pep" : found.sheet3.tot_sun_pep ,

          "f_rain_acc" :found.sheet3.f_rain_acc ,"gi_rain_acc" :found.sheet3.gi_rain_acc ,"mi_rain_acc" :found.sheet3.mi_rain_acc , "ni_rain_acc" :found.sheet3.ni_rain_acc , "tot_rain_acc" :found.sheet3.tot_rain_acc , "kil_rain_pep" : found.sheet3.kil_rain_pep ,"gi_rain_pep" : found.sheet3.gi_rain_pep ,"mi_rain_pep" : found.sheet3.mi_rain_pep ,"tot_rain_pep" : found.sheet3.tot_rain_pep ,

          "f_hail_acc" :found.sheet3.f_hail_acc ,"gi_hail_acc" :found.sheet3.gi_hail_acc ,"mi_hail_acc" :found.sheet3.mi_hail_acc , "ni_hail_acc" :found.sheet3.ni_hail_acc , "tot_hail_acc" :found.sheet3.tot_hail_acc , "kil_hail_pep" : found.sheet3.kil_hail_pep ,"gi_hail_pep" : found.sheet3.gi_hail_pep ,"mi_hail_pep" : found.sheet3.mi_hail_pep ,"tot_hail_pep" : found.sheet3.tot_hail_pep ,

          "f_fog_acc" :found.sheet3.f_fog_acc ,"gi_fog_acc" :found.sheet3.gi_fog_acc ,"mi_fog_acc" :found.sheet3.mi_fog_acc , "ni_fog_acc" :found.sheet3.ni_fog_acc , "tot_fog_acc" :found.sheet3.tot_fog_acc , "kil_fog_pep" : found.sheet3.kil_fog_pep ,"gi_fog_pep" : found.sheet3.gi_fog_pep ,"mi_fog_pep" : found.sheet3.mi_fog_pep ,"tot_fog_pep" : found.sheet3.tot_fog_pep ,

          "f_oth_acc" :found.sheet3.f_oth_acc ,"gi_oth_acc" :found.sheet3.gi_oth_acc ,"mi_oth_acc" :found.sheet3.mi_oth_acc , "ni_oth_acc" :found.sheet3.ni_oth_acc , "tot_oth_acc" :found.sheet3.tot_oth_acc , "kil_oth_pep" : found.sheet3.kil_oth_pep ,"gi_oth_pep" : found.sheet3.gi_oth_pep ,"mi_oth_pep" : found.sheet3.mi_oth_pep ,"tot_oth_pep" : found.sheet3.tot_oth_pep ,

          "f_tot_acc" :found.sheet3.f_tot_acc ,"gi_tot_acc" :found.sheet3.gi_tot_acc ,"mi_tot_acc" :found.sheet3.mi_tot_acc , "ni_tot_acc" :found.sheet3.ni_tot_acc , "tot_tot_acc" :found.sheet3.tot_tot_acc , "kil_tot_pep" : found.sheet3.kil_tot_pep ,"gi_tot_pep" : found.sheet3.gi_tot_pep ,"mi_tot_pep" : found.sheet3.mi_tot_pep ,"tot_tot_pep" : found.sheet3.tot_tot_pep ,

        })
        }
        if(option == "roads"){
          res.render("2018_west/sheet4" , {"f_exp_acc" :found.sheet4.f_exp_acc ,"gi_exp_acc" :found.sheet4.gi_exp_acc ,"mi_exp_acc" :found.sheet4.mi_exp_acc , "ni_exp_acc" :found.sheet4.ni_exp_acc , "tot_exp_acc" :found.sheet4.tot_exp_acc , "k_exp_pep" : found.sheet4.k_exp_pep ,"gi_exp_pep" : found.sheet4.gi_exp_pep ,"mi_exp_pep" : found.sheet4.mi_exp_pep ,"tot_exp_pep" : found.sheet4.tot_exp_pep ,

          "f_nh_acc" :found.sheet4.f_nh_acc ,"gi_nh_acc" :found.sheet4.gi_nh_acc ,"mi_nh_acc" :found.sheet4.mi_nh_acc , "ni_nh_acc" :found.sheet4.ni_nh_acc , "tot_nh_acc" :found.sheet4.tot_nh_acc , "k_nh_pep" : found.sheet4.k_nh_pep ,"gi_nh_pep" : found.sheet4.gi_nh_pep ,"mi_nh_pep" : found.sheet4.mi_nh_pep ,"tot_nh_pep" : found.sheet4.tot_nh_pep ,

          "f_sh_acc" :found.sheet4.f_sh_acc ,"gi_sh_acc" :found.sheet4.gi_sh_acc ,"mi_sh_acc" :found.sheet4.mi_sh_acc , "ni_sh_acc" :found.sheet4.ni_sh_acc , "tot_sh_acc" :found.sheet4.tot_sh_acc , "k_sh_pep" : found.sheet4.k_sh_pep ,"gi_sh_pep" : found.sheet4.gi_sh_pep ,"mi_sh_pep" : found.sheet4.mi_sh_pep ,"tot_sh_pep" : found.sheet4.tot_sh_pep ,

          "f_or_acc" :found.sheet4.f_or_acc ,"gi_or_acc" :found.sheet4.gi_or_acc ,"mi_or_acc" :found.sheet4.mi_or_acc , "ni_or_acc" :found.sheet4.ni_or_acc , "tot_or_acc" :found.sheet4.tot_or_acc , "k_or_pep" : found.sheet4.k_or_pep ,"gi_or_pep" : found.sheet4.gi_or_pep ,"mi_or_pep" : found.sheet4.mi_or_pep ,"tot_or_pep" : found.sheet4.tot_or_pep ,

          "f_tot_acc" :found.sheet4.f_tot_acc ,"gi_tot_acc" :found.sheet4.gi_tot_acc ,"mi_tot_acc" :found.sheet4.mi_tot_acc , "ni_tot_acc" :found.sheet4.ni_tot_acc , "tot_tot_acc" :found.sheet4.tot_tot_acc , "k_tot_pep" : found.sheet4.k_tot_pep ,"gi_tot_pep" : found.sheet4.gi_tot_pep ,"mi_tot_pep" : found.sheet4.mi_tot_pep ,"tot_tot_pep" : found.sheet4.tot_tot_pep ,

        })
        }
        if(option == "environment"){
          res.render("2018_west/sheet5" , {"f_ra_acc" :found.sheet5.f_ra_acc ,"gi_ra_acc" :found.sheet5.gi_ra_acc ,"mi_ra_acc" :found.sheet5.mi_ra_acc , "ni_ra_acc" :found.sheet5.ni_ra_acc , "tot_ra_acc" :found.sheet5.tot_ra_acc , "k_ra_pep" : found.sheet5.k_ra_pep ,"gi_ra_pep" : found.sheet5.gi_ra_pep ,"mi_ra_pep" : found.sheet5.mi_ra_pep ,"tot_ra_pep" : found.sheet5.tot_ra_pep ,

          "f_ia_acc" :found.sheet5.f_ia_acc ,"gi_ia_acc" :found.sheet5.gi_ia_acc ,"mi_ia_acc" :found.sheet5.mi_ia_acc , "ni_ia_acc" :found.sheet5.ni_ia_acc , "tot_ia_acc" :found.sheet5.tot_ia_acc , "k_ia_pep" : found.sheet5.k_ia_pep ,"gi_ia_pep" : found.sheet5.gi_ia_pep ,"mi_ia_pep" : found.sheet5.mi_ia_pep ,"tot_ia_pep" : found.sheet5.tot_ia_pep ,

          "f_ca_acc" :found.sheet5.f_ca_acc ,"gi_ca_acc" :found.sheet5.gi_ca_acc ,"mi_ca_acc" :found.sheet5.mi_ca_acc , "ni_ca_acc" :found.sheet5.ni_ca_acc , "tot_ca_acc" :found.sheet5.tot_ca_acc , "k_ca_pep" : found.sheet5.k_ca_pep ,"gi_ca_pep" : found.sheet5.gi_ca_pep ,"mi_ca_pep" : found.sheet5.mi_ca_pep ,"tot_ca_pep" : found.sheet5.tot_ca_pep ,

          "f_oa_acc" :found.sheet5.f_oa_acc ,"gi_oa_acc" :found.sheet5.gi_oa_acc ,"mi_oa_acc" :found.sheet5.mi_oa_acc , "ni_oa_acc" :found.sheet5.ni_oa_acc , "tot_oa_acc" :found.sheet5.tot_oa_acc , "k_oa_pep" : found.sheet5.k_oa_pep ,"gi_oa_pep" : found.sheet5.gi_oa_pep ,"mi_oa_pep" : found.sheet5.mi_oa_pep ,"tot_oa_pep" : found.sheet5.tot_oa_pep ,

          "f_oth_acc" :found.sheet5.f_oth_acc ,"gi_oth_acc" :found.sheet5.gi_oth_acc ,"mi_oth_acc" :found.sheet5.mi_oth_acc , "ni_oth_acc" :found.sheet5.ni_oth_acc , "tot_oth_acc" :found.sheet5.tot_oth_acc , "k_oth_pep" : found.sheet5.k_oth_pep ,"gi_oth_pep" : found.sheet5.gi_oth_pep ,"mi_oth_pep" : found.sheet5.mi_oth_pep ,"tot_oth_pep" : found.sheet5.tot_oth_pep ,
          
          "f_tot_acc" :found.sheet5.f_tot_acc ,"gi_tot_acc" :found.sheet5.gi_tot_acc ,"mi_tot_acc" :found.sheet5.mi_tot_acc , "ni_tot_acc" :found.sheet5.ni_tot_acc , "tot_tot_acc" :found.sheet5.tot_tot_acc , "k_tot_pep" : found.sheet5.k_tot_pep ,"gi_tot_pep" : found.sheet5.gi_tot_pep ,"mi_tot_pep" : found.sheet5.mi_tot_pep ,"tot_tot_pep" : found.sheet5.tot_tot_pep ,

        })
        }
        if(option == "features"){
          res.render("2018_west/sheet6" , {"f_sr_acc" :found.sheet6.f_sr_acc ,"gi_sr_acc" :found.sheet6.gi_sr_acc ,"mi_sr_acc" :found.sheet6.mi_sr_acc , "ni_sr_acc" :found.sheet6.ni_sr_acc , "tot_sr_acc" :found.sheet6.tot_sr_acc , "k_sr_pep" : found.sheet6.k_sr_pep ,"gi_sr_pep" : found.sheet6.gi_sr_pep ,"mi_sr_pep" : found.sheet6.mi_sr_pep ,"tot_sr_pep" : found.sheet6.tot_sr_pep ,

          "f_cr_acc" :found.sheet6.f_cr_acc ,"gi_cr_acc" :found.sheet6.gi_cr_acc ,"mi_cr_acc" :found.sheet6.micsr_acc , "ni_cr_acc" :found.sheet6.ni_cr_acc , "tot_cr_acc" :found.sheet6.tot_cr_acc , "k_cr_pep" : found.sheet6.k_cr_pep ,"gi_cr_pep" : found.sheet6.gi_cr_pep ,"mi_cr_pep" : found.sheet6.mi_cr_pep ,"tot_cr_pep" : found.sheet6.tot_cr_pep ,

          "f_brid_acc" :found.sheet6.f_brid_acc ,"gi_brid_acc" :found.sheet6.gi_brid_acc ,"mi_brid_acc" :found.sheet6.mi_brid_acc , "ni_brid_acc" :found.sheet6.ni_brid_acc , "tot_brid_acc" :found.sheet6.tot_brid_acc , "k_brid_pep" : found.sheet6.k_brid_pep ,"gi_brid_pep" : found.sheet6.gi_brid_pep ,"mi_brid_pep" : found.sheet6.mi_brid_pep ,"tot_brid_pep" : found.sheet6.tot_brid_pep ,

          "f_culv_acc" :found.sheet6.f_culv_acc ,"gi_culv_acc" :found.sheet6.gi_culv_acc ,"mi_culv_acc" :found.sheet6.mi_culv_acc , "ni_culv_acc" :found.sheet6.ni_culv_acc , "tot_culv_acc" :found.sheet6.tot_culv_acc , "k_culv_pep" : found.sheet6.k_culv_pep ,"gi_culv_pep" : found.sheet6.gi_culv_pep ,"mi_culv_pep" : found.sheet6.mi_culv_pep ,"tot_culv_pep" : found.sheet6.tot_culv_pep ,

          "f_poth_acc" :found.sheet6.f_poth_acc ,"gi_poth_acc" :found.sheet6.gi_poth_acc ,"mi_poth_acc" :found.sheet6.mi_poth_acc , "ni_poth_acc" :found.sheet6.ni_poth_acc , "tot_poth_acc" :found.sheet6.tot_poth_acc , "k_poth_pep" : found.sheet6.k_poth_pep ,"gi_poth_pep" : found.sheet6.gi_poth_pep ,"mi_poth_pep" : found.sheet6.mi_poth_pep ,"tot_poth_pep" : found.sheet6.tot_poth_pep ,
          
          "f_steepg_acc" :found.sheet6.f_steepg_acc ,"gi_steepg_acc" :found.sheet6.gi_steepg_acc ,"mi_steepg_acc" :found.sheet6.mi_steepg_acc , "ni_steepg_acc" :found.sheet6.ni_steepg_acc , "tot_steepg_acc" :found.sheet6.tot_steepg_acc , "k_steepg_pep" : found.sheet6.k_steepg_pep ,"gi_steepg_pep" : found.sheet6.gi_steepg_pep ,"mi_steepg_pep" : found.sheet6.mi_steepg_pep ,"tot_steepg_pep" : found.sheet6.tot_steepg_pep ,

          "f_underc_acc" :found.sheet6.f_underc_acc ,"gi_underc_acc" :found.sheet6.gi_underc_acc ,"mi_underc_acc" :found.sheet6.mi_underc_acc , "ni_underc_acc" :found.sheet6.ni_underc_acc , "tot_underc_acc" :found.sheet6.tot_underc_acc , "k_underc_pep" : found.sheet6.k_underc_pep ,"gi_underc_pep" : found.sheet6.gi_underc_pep ,"mi_underc_pep" : found.sheet6.mi_underc_pep ,"tot_underc_pep" : found.sheet6.tot_underc_pep ,

          "f_others_acc" :found.sheet6.f_others_acc ,"gi_others_acc" :found.sheet6.gi_others_acc ,"mi_others_acc" :found.sheet6.mi_others_acc , "ni_others_acc" :found.sheet6.ni_others_acc , "tot_others_acc" :found.sheet6.tot_others_acc , "k_others_pep" : found.sheet6.k_others_pep ,"gi_others_pep" : found.sheet6.gi_others_pep ,"mi_others_pep" : found.sheet6.mi_others_pep ,"tot_others_pep" : found.sheet6.tot_others_pep ,

          "f_tot_acc" :found.sheet6.f_tot_acc ,"gi_tot_acc" :found.sheet6.gi_tot_acc ,"mi_tot_acc" :found.sheet6.mi_tot_acc , "ni_tot_acc" :found.sheet6.ni_tot_acc , "tot_tot_acc" :found.sheet6.tot_sr_acc , "k_tot_pep" : found.sheet6.k_tot_pep ,"gi_tot_pep" : found.sheet6.gi_tot_pep ,"mi_tot_pep" : found.sheet6.mi_tot_pep ,"tot_tot_pep" : found.sheet6.tot_tot_pep ,

        })
        }
        if(option == "jnc_type"){
          res.render("2018_west/sheet7" , {"f_tjn_acc" :found.sheet7.f_tjn_acc ,"gi_tjn_acc" :found.sheet7.gi_tjn_acc ,"mi_tjn_acc" :found.sheet7.mi_tjn_acc , "ni_tjn_acc" :found.sheet7.ni_tjn_acc , "tot_tjn_acc" :found.sheet7.tot_tjn_acc , "k_tjn_pep" : found.sheet7.k_tjn_pep ,"gi_tjn_pep" : found.sheet7.gi_tjn_pep ,"mi_tjn_pep" : found.sheet7.mi_tjn_pep ,"tot_tjn_pep" : found.sheet7.tot_tjn_pep ,

          "f_yjn_acc" :found.sheet7.f_yjn_acc ,"gi_yjn_acc" :found.sheet7.gi_yjn_acc ,"mi_yjn_acc" :found.sheet7.mi_yjn_acc , "ni_yjn_acc" :found.sheet7.ni_yjn_acc , "tot_yjn_acc" :found.sheet7.tot_yjn_acc , "k_yjn_pep" : found.sheet7.k_yjn_pep ,"gi_yjn_pep" : found.sheet7.gi_yjn_pep ,"mi_yjn_pep" : found.sheet7.mi_yjn_pep ,"tot_yjn_pep" : found.sheet7.tot_yjn_pep ,

          "f_faj_acc" :found.sheet7.f_faj_acc ,"gi_faj_acc" :found.sheet7.gi_faj_acc ,"mi_faj_acc" :found.sheet7.mi_faj_acc , "ni_faj_acc" :found.sheet7.ni_faj_acc , "tot_faj_acc" :found.sheet7.tot_faj_acc , "k_faj_pep" : found.sheet7.k_faj_pep ,"gi_faj_pep" : found.sheet7.gi_faj_pep ,"mi_faj_pep" : found.sheet7.mi_faj_pep ,"tot_faj_pep" : found.sheet7.tot_faj_pep ,

          "f_sj_acc" :found.sheet7.f_sj_acc ,"gi_sj_acc" :found.sheet7.gi_sj_acc ,"mi_sj_acc" :found.sheet7.mi_sj_acc , "ni_sj_acc" :found.sheet7.ni_sj_acc , "tot_sj_acc" :found.sheet7.tot_sj_acc , "k_sj_pep" : found.sheet7.k_sj_pep ,"gi_sj_pep" : found.sheet7.gi_sj_pep ,"mi_sj_pep" : found.sheet7.mi_sj_pep ,"tot_sj_pep" : found.sheet7.tot_sj_pep ,

          "f_raj_acc" :found.sheet7.f_raj_acc ,"gi_raj_acc" :found.sheet7.gi_raj_acc ,"mi_raj_acc" :found.sheet7.mi_raj_acc , "ni_raj_acc" :found.sheet7.ni_raj_acc , "tot_raj_acc" :found.sheet7.tot_raj_acc , "k_raj_pep" : found.sheet7.k_raj_pep ,"gi_raj_pep" : found.sheet7.gi_raj_pep ,"mi_raj_pep" : found.sheet7.mi_raj_pep ,"tot_raj_pep" : found.sheet7.tot_raj_pep ,
          
          "f_tot_acc" :found.sheet7.f_tot_acc ,"gi_tot_acc" :found.sheet7.gi_tot_acc ,"mi_tot_acc" :found.sheet7.mi_tot_acc , "ni_tot_acc" :found.sheet7.ni_tot_acc , "tot_tot_acc" :found.sheet7.tot_tot_acc , "k_tot_pep" : found.sheet7.k_tot_pep ,"gi_tot_pep" : found.sheet7.gi_tot_pep ,"mi_tot_pep" : found.sheet7.mi_tot_pep ,"tot_tot_pep" : found.sheet7.tot_tot_pep ,

        })
        }
        
        if(option == "traffic_control"){
          res.render("2018_west/sheet8" , {"f_tls_acc" :found.sheet8.f_tls_acc ,"gi_tls_acc" :found.sheet8.gi_tls_acc ,"mi_tls_acc" :found.sheet8.mi_tls_acc , "ni_tls_acc" :found.sheet8.ni_tls_acc , "tot_tls_acc" :found.sheet8.tot_tls_acc , "k_tls_pep" : found.sheet8.k_tls_pep ,"gi_tls_pep" : found.sheet8.gi_tls_pep ,"mi_tls_pep" : found.sheet8.mi_tls_pep ,"tot_tls_pep" : found.sheet8.tot_tls_pep ,

          "f_pc_acc" :found.sheet8.f_pc_acc ,"gi_pc_acc" :found.sheet8.gi_pc_acc ,"mi_pc_acc" :found.sheet8.mi_pc_acc , "ni_pc_acc" :found.sheet8.ni_pc_acc , "tot_pc_acc" :found.sheet8.tot_pc_acc , "k_pc_pep" : found.sheet8.k_pc_pep ,"gi_pc_pep" : found.sheet8.gi_pc_pep ,"mi_pc_pep" : found.sheet8.mi_pc_pep ,"tot_pc_pep" : found.sheet8.tot_pc_pep ,

          "f_ss_acc" :found.sheet8.f_ss_acc ,"gi_ss_acc" :found.sheet8.gi_ss_acc ,"mi_ss_acc" :found.sheet8.mi_ss_acc , "ni_ss_acc" :found.sheet8.ni_ss_acc , "tot_ss_acc" :found.sheet8.tot_ss_acc , "k_ss_pep" : found.sheet8.k_ss_pep ,"gi_ss_pep" : found.sheet8.gi_ss_pep ,"mi_ss_pep" : found.sheet8.mi_ss_pep ,"tot_ss_pep" : found.sheet8.tot_ss_pep ,

          "f_fs_acc" :found.sheet8.f_fs_acc ,"gi_fs_acc" :found.sheet8.gi_fs_acc ,"mi_fs_acc" :found.sheet8.mi_fs_acc , "ni_fs_acc" :found.sheet8.ni_fs_acc , "tot_fs_acc" :found.sheet8.tot_fs_acc , "k_fs_pep" : found.sheet8.k_fs_pep ,"gi_fs_pep" : found.sheet8.gi_fs_pep ,"mi_fs_pep" : found.sheet8.mi_fs_pep ,"tot_fs_pep" : found.sheet8.tot_fs_pep ,

          "f_unc_acc" :found.sheet8.f_unc_acc ,"gi_unc_acc" :found.sheet8.gi_unc_acc ,"mi_unc_acc" :found.sheet8.mi_unc_acc , "ni_unc_acc" :found.sheet8.ni_unc_acc , "tot_unc_acc" :found.sheet8.tot_unc_acc , "k_unc_pep" : found.sheet8.k_unc_pep ,"gi_unc_pep" : found.sheet8.gi_unc_pep ,"mi_unc_pep" : found.sheet8.mi_unc_pep ,"tot_unc_pep" : found.sheet8.tot_unc_pep ,
          
          "f_tot_acc" :found.sheet8.f_tot_acc ,"gi_tot_acc" :found.sheet8.gi_tot_acc ,"mi_tot_acc" :found.sheet8.mi_tot_acc , "ni_tot_acc" :found.sheet8.ni_tot_acc , "tot_tot_acc" :found.sheet8.tot_tot_acc , "k_tot_pep" : found.sheet8.k_tot_pep ,"gi_tot_pep" : found.sheet8.gi_tot_pep ,"mi_tot_pep" : found.sheet8.mi_tot_pep ,"tot_tot_pep" : found.sheet8.tot_tot_pep ,

        })
        }
        if(option == "ped_infra"){
          res.render("2018_west/sheet9" , {"f_zc_acc" :found.sheet9.f_zc_acc ,"gi_zc_acc" :found.sheet9.gi_zc_acc ,"mi_zc_acc" :found.sheet9.mi_zc_acc , "ni_zc_acc" :found.sheet9.ni_zc_acc , "tot_zc_acc" :found.sheet9.tot_zc_acc , "k_zc_pep" : found.sheet9.k_zc_pep ,"gi_zc_pep" : found.sheet9.gi_zc_pep ,"mi_zc_pep" : found.sheet9.mi_zc_pep ,"tot_zc_pep" : found.sheet9.tot_zc_pep ,

          "f_fb_acc" :found.sheet9.f_fb_acc ,"gi_fb_acc" :found.sheet9.gi_fb_acc ,"mi_fb_acc" :found.sheet9.mi_fb_acc , "ni_fb_acc" :found.sheet9.ni_fb_acc , "tot_fb_acc" :found.sheet9.tot_fb_acc , "k_fb_pep" : found.sheet9.k_fb_pep ,"gi_fb_pep" : found.sheet9.gi_fb_pep ,"mi_fb_pep" : found.sheet9.mi_fb_pep ,"tot_fb_pep" : found.sheet9.tot_fb_pep ,

          "f_fp_acc" :found.sheet9.f_fp_acc ,"gi_fp_acc" :found.sheet9.gi_fp_acc ,"mi_fp_acc" :found.sheet9.mi_fp_acc , "ni_fp_acc" :found.sheet9.ni_fp_acc , "tot_fp_acc" :found.sheet9.tot_fp_acc , "k_fp_pep" : found.sheet9.k_fp_pep ,"gi_fp_pep" : found.sheet9.gi_fp_pep ,"mi_fp_pep" : found.sheet9.mi_fp_pep ,"tot_fp_pep" : found.sheet9.tot_fp_pep ,

          "f_others_acc" :found.sheet9.f_others_acc ,"gi_others_acc" :found.sheet9.gi_others_acc ,"mi_others_acc" :found.sheet9.mi_others_acc , "ni_others_acc" :found.sheet9.ni_others_acc , "tot_others_acc" :found.sheet9.tot_others_acc , "k_others_pep" : found.sheet9.k_others_pep ,"gi_others_pep" : found.sheet9.gi_others_pep ,"mi_others_pep" : found.sheet9.mi_others_pep ,"tot_others_pep" : found.sheet9.tot_others_pep ,
          
          "f_tot_acc" :found.sheet9.f_tot_acc ,"gi_tot_acc" :found.sheet9.gi_tot_acc ,"mi_tot_acc" :found.sheet9.mi_tot_acc , "ni_tot_acc" :found.sheet9.ni_tot_acc , "tot_tot_acc" :found.sheet9.tot_tot_acc , "k_tot_pep" : found.sheet9.k_tot_pep ,"gi_tot_pep" : found.sheet9.gi_tot_pep ,"mi_tot_pep" : found.sheet9.mi_tot_pep ,"tot_tot_pep" : found.sheet9.tot_tot_pep ,

        })
        }
        if(option == "vehicles"){
          res.render("2018_west/sheet10" , {"f_ped_acc" :found.sheet10.f_ped_acc ,"gi_ped_acc" :found.sheet10.gi_ped_acc ,"mi_ped_acc" :found.sheet10.mi_ped_acc , "ni_ped_acc" :found.sheet10.ni_ped_acc , "tot_ped_acc" :found.sheet10.tot_ped_acc , "k_ped_pep" : found.sheet10.k_ped_pep ,"gi_ped_pep" : found.sheet10.gi_ped_pep ,"mi_ped_pep" : found.sheet10.mi_ped_pep ,"tot_ped_pep" : found.sheet10.tot_ped_pep ,

          "f_byc_acc" :found.sheet10.f_byc_acc ,"gi_byc_acc" :found.sheet10.gi_byc_acc ,"mi_byc_acc" :found.sheet10.mi_byc_acc , "ni_byc_acc" :found.sheet10.ni_byc_acc , "tot_byc_acc" :found.sheet10.tot_byc_acc , "k_byc_pep" : found.sheet10.k_byc_pep ,"gi_byc_pep" : found.sheet10.gi_byc_pep ,"mi_byc_pep" : found.sheet10.mi_byc_pep ,"tot_byc_pep" : found.sheet10.tot_byc_pep ,

          "f_2wh_acc" :found.sheet10.f_2wh_acc ,"gi_2wh_acc" :found.sheet10.gi_2wh_acc ,"mi_2wh_acc" :found.sheet10.mi_2wh_acc , "ni_2wh_acc" :found.sheet10.ni_2wh_acc , "tot_2wh_acc" :found.sheet10.tot_2wh_acc , "k_2wh_pep" : found.sheet10.k_2wh_pep ,"gi_2wh_pep" : found.sheet10.gi_2wh_pep ,"mi_2wh_pep" : found.sheet10.mi_2wh_pep ,"tot_2wh_pep" : found.sheet10.tot_2wh_pep ,

          "f_arick_acc" :found.sheet10.f_arick_acc ,"gi_arick_acc" :found.sheet10.gi_arick_acc ,"mi_arick_acc" :found.sheet10.mi_arick_acc , "ni_arick_acc" :found.sheet10.ni_arick_acc , "tot_arick_acc" :found.sheet10.tot_arick_acc , "k_arick_pep" : found.sheet10.k_arick_pep ,"gi_arick_pep" : found.sheet10.gi_arick_pep ,"mi_arick_pep" : found.sheet10.mi_arick_pep ,"tot_arick_pep" : found.sheet10.tot_arick_pep ,
          
          "f_4wh_acc" :found.sheet10.f_4wh_acc ,"gi_4wh_acc" :found.sheet10.gi_4wh_acc ,"mi_4wh_acc" :found.sheet10.mi_4wh_acc , "ni_4wh_acc" :found.sheet10.ni_4wh_acc , "tot_4wh_acc" :found.sheet10.tot_4wh_acc , "k_4wh_pep" : found.sheet10.k_4wh_pep ,"gi_4wh_pep" : found.sheet10.gi_4wh_pep ,"mi_4wh_pep" : found.sheet10.mi_4wh_pep ,"tot_4wh_pep" : found.sheet10.tot_4wh_pep ,

          "f_truck_acc" :found.sheet10.f_truck_acc ,"gi_truck_acc" :found.sheet10.gi_truck_acc ,"mi_truck_acc" :found.sheet10.mi_truck_acc , "ni_truck_acc" :found.sheet10.ni_truck_acc , "tot_truck_acc" :found.sheet10.tot_truck_acc , "k_truck_pep" : found.sheet10.k_truck_pep ,"gi_truck_pep" : found.sheet10.gi_truck_pep ,"mi_truck_pep" : found.sheet10.mi_truck_pep ,"tot_truck_pep" : found.sheet10.tot_truck_pep ,

          "f_bus_acc" :found.sheet10.f_bus_acc ,"gi_bus_acc" :found.sheet10.gi_bus_acc ,"mi_bus_acc" :found.sheet10.mi_bus_acc , "ni_bus_acc" :found.sheet10.ni_bus_acc , "tot_bus_acc" :found.sheet10.tot_bus_acc , "k_bus_pep" : found.sheet10.k_bus_pep ,"gi_bus_pep" : found.sheet10.gi_bus_pep ,"mi_bus_pep" : found.sheet10.mi_bus_pep ,"tot_bus_pep" : found.sheet10.tot_bus_pep ,

          "f_omv_acc" :found.sheet10.f_omv_acc ,"gi_omv_acc" :found.sheet10.gi_omv_acc ,"mi_omv_acc" :found.sheet10.mi_omv_acc , "ni_omv_acc" :found.sheet10.ni_omv_acc , "tot_omv_acc" :found.sheet10.tot_omv_acc , "k_omv_pep" : found.sheet10.k_omv_pep ,"gi_omv_pep" : found.sheet10.gi_omv_pep ,"mi_omv_pep" : found.sheet10.mi_omv_pep ,"tot_omv_pep" : found.sheet10.tot_omv_pep ,

          "f_er_acc" :found.sheet10.f_er_acc ,"gi_er_acc" :found.sheet10.gi_er_acc ,"mi_er_acc" :found.sheet10.mi_er_acc , "ni_er_acc" :found.sheet10.ni_er_acc , "tot_er_acc" :found.sheet10.tot_er_acc , "k_er_pep" : found.sheet10.k_er_pep ,"gi_er_pep" : found.sheet10.gi_er_pep ,"mi_er_pep" : found.sheet10.mi_er_pep ,"tot_er_pep" : found.sheet10.tot_er_pep ,

          "f_nmv_acc" :found.sheet10.f_nmv_acc ,"gi_nmv_acc" :found.sheet10.gi_nmv_acc ,"mi_nmv_acc" :found.sheet10.mi_nmv_acc , "ni_nmv_acc" :found.sheet10.ni_nmv_acc , "tot_nmv_acc" :found.sheet10.tot_nmv_acc , "k_nmv_pep" : found.sheet10.k_nmv_pep ,"gi_nmv_pep" : found.sheet10.gi_nmv_pep ,"mi_nmv_pep" : found.sheet10.mi_nmv_pep ,"tot_nmv_pep" : found.sheet10.tot_nmv_pep ,

          "f_other_acc" :found.sheet10.f_other_acc ,"gi_other_acc" :found.sheet10.gi_other_acc ,"mi_other_acc" :found.sheet10.mi_other_acc , "ni_other_acc" :found.sheet10.ni_other_acc , "tot_other_acc" :found.sheet10.tot_other_acc , "k_other_pep" : found.sheet10.k_other_pep ,"gi_other_pep" : found.sheet10.gi_other_pep ,"mi_other_pep" : found.sheet10.mi_other_pep ,"tot_other_pep" : found.sheet10.tot_other_pep ,

          "f_tot_acc" :found.sheet10.f_tot_acc ,"gi_tot_acc" :found.sheet10.gi_tot_acc ,"mi_tot_acc" :found.sheet10.mi_tot_acc , "ni_tot_acc" :found.sheet10.ni_tot_acc , "tot_tot_acc" :found.sheet10.tot_tot_acc , "k_tot_pep" : found.sheet10.k_tot_pep ,"gi_tot_pep" : found.sheet10.gi_tot_pep ,"mi_tot_pep" : found.sheet10.mi_tot_pep ,"tot_tot_pep" : found.sheet10.tot_tot_pep ,

        })
        }
        if(option == "age_vehicles"){
          res.render("2018_west/sheet11" , {"f_5_acc" :found.sheet11.f_5_acc ,"gi_5_acc" :found.sheet11.gi_5_acc ,"mi_5_acc" :found.sheet11.mi_5_acc , "ni_5_acc" :found.sheet11.ni_5_acc , "tot_5_acc" :found.sheet11.tot_5_acc , "k_5_pep" : found.sheet11.k_5_pep ,"gi_5_pep" : found.sheet11.gi_5_pep ,"mi_5_pep" : found.sheet11.mi_5_pep ,"tot_5_pep" : found.sheet11.tot_5_pep ,

          "f_510_acc" :found.sheet11.f_510_acc ,"gi_510_acc" :found.sheet11.gi_510_acc ,"mi_510_acc" :found.sheet11.mi_510_acc , "ni_510_acc" :found.sheet11.ni_510_acc , "tot_510_acc" :found.sheet11.tot_510_acc , "k_510_pep" : found.sheet11.k_510_pep ,"gi_510_pep" : found.sheet11.gi_510_pep ,"mi_510_pep" : found.sheet11.mi_510_pep ,"tot_510_pep" : found.sheet11.tot_510_pep ,

          "f_1015_acc" :found.sheet11.f_1015_acc ,"gi_1015_acc" :found.sheet11.gi_1015_acc ,"mi_1015_acc" :found.sheet11.mi_1015_acc , "ni_1015_acc" :found.sheet11.ni_1015_acc , "tot_1015_acc" :found.sheet11.tot_1015_acc , "k_1015_pep" : found.sheet11.k_1015_pep ,"gi_1015_pep" : found.sheet11.gi_1015_pep ,"mi_1015_pep" : found.sheet11.mi_1015_pep ,"tot_1015_pep" : found.sheet11.tot_1015_pep ,

          "f_15_acc" :found.sheet11.f_15_acc ,"gi_15_acc" :found.sheet11.gi_15_acc ,"mi_15_acc" :found.sheet11.mi_15_acc , "ni_15_acc" :found.sheet11.ni_15_acc , "tot_15_acc" :found.sheet11.tot_15_acc , "k_15_pep" : found.sheet11.k_15_pep ,"gi_15_pep" : found.sheet11.gi_15_pep ,"mi_15_pep" : found.sheet11.mi_15_pep ,"tot_15_pep" : found.sheet11.tot_15_pep ,
          
          "f_unk_acc" : found.sheet11.f_unk_acc ,"gi_unk_acc" :found.sheet11.gi_unk_acc ,"mi_unk_acc" :found.sheet11.mi_unk_acc , "ni_unk_acc" :found.sheet11.ni_unk_acc , "tot_unk_acc" :found.sheet11.tot_unk_acc , "k_unk_pep" : found.sheet11.k_unk_pep ,"gi_unk_pep" : found.sheet11.gi_unk_pep ,"mi_unk_pep" : found.sheet11.mi_unk_pep ,"tot_unk_pep" : found.sheet11.tot_unk_pep ,

          "f_tot_acc" :found.sheet11.f_tot_acc ,"gi_tot_acc" :found.sheet11.gi_tot_acc ,"mi_tot_acc" :found.sheet11.mi_tot_acc , "ni_tot_acc" :found.sheet11.ni_tot_acc , "tot_tot_acc" :found.sheet11.tot_tot_acc , "k_tot_pep" : found.sheet11.k_tot_pep ,"gi_tot_pep" : found.sheet11.gi_tot_pep ,"mi_tot_pep" : found.sheet11.mi_tot_pep ,"tot_tot_pep" : found.sheet11.tot_tot_pep ,


        })
        }
        if(option == "load"){
          res.render("2018_west/sheet12" , {"f_nl_acc" :found.sheet12.f_nl_acc ,"gi_nl_acc" :found.sheet12.gi_nl_acc ,"mi_nl_acc" :found.sheet12.mi_nl_acc , "ni_nl_acc" :found.sheet12.ni_nl_acc , "tot_nl_acc" :found.sheet12.tot_nl_acc , "k_nl_pep" : found.sheet12.k_nl_pep ,"gi_nl_pep" : found.sheet12.gi_nl_pep ,"mi_nl_pep" : found.sheet12.mi_nl_pep ,"tot_nl_pep" : found.sheet12.tot_nl_pep ,

          "f_ol_acc" :found.sheet12.f_ol_acc ,"gi_ol_acc" :found.sheet12.gi_ol_acc ,"mi_ol_acc" :found.sheet12.mi_ol_acc , "ni_ol_acc" :found.sheet12.ni_ol_acc , "tot_ol_acc" :found.sheet12.tot_ol_acc , "k_ol_pep" : found.sheet12.k_ol_pep ,"gi_ol_pep" : found.sheet12.gi_ol_pep ,"mi_ol_pep" : found.sheet12.mi_ol_pep ,"tot_ol_pep" : found.sheet12.tot_ol_pep ,

          "f_emp_acc" :found.sheet12.f_emp_acc ,"gi_emp_acc" :found.sheet12.gi_emp_acc ,"mi_emp_acc" :found.sheet12.mi_emp_acc , "ni_emp_acc" :found.sheet12.ni_emp_acc , "tot_emp_acc" :found.sheet12.tot_emp_acc , "k_emp_pep" : found.sheet12.k_emp_pep ,"gi_emp_pep" : found.sheet12.gi_emp_pep ,"mi_emp_pep" : found.sheet12.mi_emp_pep ,"tot_emp_pep" : found.sheet12.tot_emp_pep ,

          "f_notk_acc" :found.sheet12.f_notk_acc ,"gi_notk_acc" :found.sheet12.gi_notk_acc ,"mi_notk_acc" :found.sheet12.mi_notk_acc , "ni_notk_acc" :found.sheet12.ni_notk_acc , "tot_notk_acc" :found.sheet12.tot_notk_acc , "k_notk_pep" : found.sheet12.k_notk_pep ,"gi_notk_pep" : found.sheet12.gi_notk_pep ,"mi_notk_pep" : found.sheet12.mi_notk_pep ,"tot_notk_pep" : found.sheet12.tot_notk_pep ,
          
          "f_tot_acc" :found.sheet12.f_tot_acc ,"gi_tot_acc" :found.sheet12.gi_tot_acc ,"mi_tot_acc" :found.sheet12.mi_tot_acc , "ni_tot_acc" :found.sheet12.ni_tot_acc , "tot_tot_acc" :found.sheet12.tot_tot_acc , "k_tot_pep" : found.sheet12.k_tot_pep ,"gi_tot_pep" : found.sheet12.gi_tot_pep ,"mi_tot_pep" : found.sheet12.mi_tot_pep ,"tot_tot_pep" : found.sheet12.tot_tot_pep ,


        })
        }
        if(option == "type_collision"){
          res.render("2018_west/sheet13" , {"f_v2v_acc" :found.sheet13.f_v2v_acc ,"gi_v2v_acc" :found.sheet13.gi_v2v_acc ,"mi_v2v_acc" :found.sheet13.mi_v2v_acc , "ni_v2v_acc" :found.sheet13.ni_v2v_acc , "tot_v2v_acc" :found.sheet13.tot_v2v_acc , "k_v2v_pep" : found.sheet13.k_v2v_pep ,"gi_v2v_pep" : found.sheet13.gi_v2v_pep ,"mi_v2v_pep" : found.sheet13.mi_v2v_pep ,"tot_v2v_pep" : found.sheet13.tot_v2v_pep ,

          "f_v2p_acc" :found.sheet13.f_v2p_acc ,"gi_v2p_acc" :found.sheet13.gi_v2p_acc ,"mi_v2p_acc" :found.sheet13.mi_v2p_acc , "ni_v2p_acc" :found.sheet13.ni_v2p_acc , "tot_v2p_acc" :found.sheet13.tot_v2p_acc , "k_v2p_pep" : found.sheet13.k_v2p_pep ,"gi_v2p_pep" : found.sheet13.gi_v2p_pep ,"mi_v2p_pep" : found.sheet13.mi_v2p_pep ,"tot_v2p_pep" : found.sheet13.tot_v2p_pep ,

          "f_v2nmv_acc" :found.sheet13.f_v2nmv_acc ,"gi_v2nmv_acc" :found.sheet13.gi_v2nmv_acc ,"mi_v2nmv_acc" :found.sheet13.mi_v2nmv_acc , "ni_v2nmv_acc" :found.sheet13.ni_v2nmv_acc , "tot_v2nmv_acc" :found.sheet13.tot_v2nmv_acc , "k_v2nmv_pep" : found.sheet13.k_v2nmv_pep ,"gi_v2nmv_pep" : found.sheet13.gi_v2nmv_pep ,"mi_v2nmv_pep" : found.sheet13.mi_v2nmv_pep ,"tot_v2nmv_pep" : found.sheet13.tot_v2nmv_pep ,

          "f_v2a_acc" :found.sheet13.f_v2a_acc ,"gi_v2a_acc" :found.sheet13.gi_v2a_acc ,"mi_v2a_acc" :found.sheet13.mi_v2a_acc , "ni_v2a_acc" :found.sheet13.ni_v2a_acc , "tot_v2a_acc" :found.sheet13.tot_v2a_acc , "k_v2a_pep" : found.sheet13.k_v2a_pep ,"gi_v2a_pep" : found.sheet13.gi_v2a_pep ,"mi_v2a_pep" : found.sheet13.mi_v2a_pep ,"tot_v2a_pep" : found.sheet13.tot_v2a_pep ,
          
          "f_tot_acc" :found.sheet13.f_tot_acc ,"gi_tot_acc" :found.sheet13.gi_tot_acc ,"mi_tot_acc" :found.sheet13.mi_tot_acc , "ni_tot_acc" :found.sheet13.ni_tot_acc , "tot_tot_acc" :found.sheet13.tot_tot_acc , "k_tot_pep" : found.sheet13.k_tot_pep ,"gi_tot_pep" : found.sheet13.gi_tot_pep ,"mi_tot_pep" : found.sheet13.mi_tot_pep ,"tot_tot_pep" : found.sheet13.tot_tot_pep ,

          "f_hitnrun_acc" :found.sheet13.f_hitnrun_acc ,"gi_hitnrun_acc" :found.sheet13.gi_hitnrun_acc ,"mi_hitnrun_acc" :found.sheet13.mi_hitnrun_acc , "ni_hitnrun_acc" :found.sheet13.ni_hitnrun_acc , "tot_hitnrun_acc" :found.sheet13.tot_hitnrun_acc , "k_hitnrun_pep" : found.sheet13.k_hitnrun_pep ,"gi_hitnrun_pep" : found.sheet13.gi_hitnrun_pep ,"mi_hitnrun_pep" : found.sheet13.mi_hitnrun_pep ,"tot_hitnrun_pep" : found.sheet13.tot_hitnrun_pep ,

          "f_hitwpv_acc" :found.sheet13.f_hitwpv_acc ,"gi_hitwpv_acc" :found.sheet13.gi_hitwpv_acc ,"mi_hitwpv_acc" :found.sheet13.mi_hitwpv_acc , "ni_hitwpv_acc" :found.sheet13.ni_hitwpv_acc , "tot_hitwpv_acc" :found.sheet13.tot_hitwpv_acc , "k_hitwpv_pep" : found.sheet13.k_hitwpv_pep ,"gi_hitwpv_pep" : found.sheet13.gi_hitwpv_pep ,"mi_hitwpv_pep" : found.sheet13.mi_hitwpv_pep ,"tot_hitwpv_pep" : found.sheet13.tot_hitwpv_pep ,

          "f_hitfback_acc" :found.sheet13.f_hitfback_acc ,"gi_hitfback_acc" :found.sheet13.gi_hitfback_acc ,"mi_hitfback_acc" :found.sheet13.mi_hitfback_acc , "ni_hitfback_acc" :found.sheet13.ni_hitfback_acc , "tot_hitfback_acc" :found.sheet13.tot_hitfback_acc , "k_hitfback_pep" : found.sheet13.k_hitfback_pep ,"gi_hitfback_pep" : found.sheet13.gi_hitfback_pep ,"mi_hitfback_pep" : found.sheet13.mi_hitfback_pep ,"tot_hitfback_pep" : found.sheet13.tot_hitfback_pep ,

          "f_hitfside_acc" :found.sheet13.f_hitfside_acc ,"gi_hitfside_acc" :found.sheet13.gi_hitfside_acc ,"mi_hitfside_acc" :found.sheet13.mi_hitfside_acc , "ni_hitfside_acc" :found.sheet13.ni_hitfside_acc , "tot_hitfside_acc" :found.sheet13.tot_hitfside_acc , "k_hitfside_pep" : found.sheet13.k_hitfside_pep ,"gi_hitfside_pep" : found.sheet13.gi_hitfside_pep ,"mi_hitfside_pep" : found.sheet13.mi_hitfside_pep ,"tot_hitfside_pep" : found.sheet13.tot_hitfside_pep ,

          "f_runoffroad_acc" :found.sheet13.f_runoffroad_acc ,"gi_runoffroad_acc" :found.sheet13.gi_runoffroad_acc ,"mi_runoffroad_acc" :found.sheet13.mi_runoffroad_acc , "ni_runoffroad_acc" :found.sheet13.ni_runoffroad_acc , "tot_runoffroad_acc" :found.sheet13.tot_runoffroad_acc , "k_runoffroad_pep" : found.sheet13.k_runoffroad_pep ,"gi_runoffroad_pep" : found.sheet13.gi_runoffroad_pep ,"mi_runoffroad_pep" : found.sheet13.mi_runoffroad_pep ,"tot_runoffroad_pep" : found.sheet13.tot_runoffroad_pep ,
          
          "f_hitwfo_acc" :found.sheet13.f_hitwfo_acc ,"gi_hitwfo_acc" :found.sheet13.gi_hitwfo_acc ,"mi_hitwfo_acc" :found.sheet13.mi_hitwfo_acc , "ni_hitwfo_acc" :found.sheet13.ni_hitwfo_acc , "tot_hitwfo_acc" :found.sheet13.tot_hitwfo_acc , "k_hitwfo_pep" : found.sheet13.k_hitwfo_pep ,"gi_hitwfo_pep" : found.sheet13.gi_hitwfo_pep ,"mi_hitwfo_pep" : found.sheet13.mi_hitwfo_pep ,"tot_hitwfo_pep" : found.sheet13.tot_hitwfo_pep ,

          "f_vo_acc" :found.sheet13.f_vo_acc ,"gi_vo_acc" :found.sheet13.gi_vo_acc ,"mi_vo_acc" :found.sheet13.mi_vo_acc , "ni_vo_acc" :found.sheet13.ni_vo_acc , "tot_vo_acc" :found.sheet13.tot_vo_acc , "k_vo_pep" : found.sheet13.k_vo_pep ,"gi_vo_pep" : found.sheet13.gi_vo_pep ,"mi_vo_pep" : found.sheet13.mi_vo_pep ,"tot_vo_pep" : found.sheet13.tot_vo_pep ,

          "f_hoc_acc" :found.sheet13.f_hoc_acc ,"gi_hoc_acc" :found.sheet13.gi_hoc_acc ,"mi_hoc_acc" :found.sheet13.mi_hoc_acc , "ni_hoc_acc" :found.sheet13.ni_hoc_acc , "tot_hoc_acc" :found.sheet13.tot_hoc_acc , "k_hoc_pep" : found.sheet13.k_hoc_pep ,"gi_hoc_pep" : found.sheet13.gi_hoc_pep ,"mi_hoc_pep" : found.sheet13.mi_hoc_pep ,"tot_hoc_pep" : found.sheet13.tot_hoc_pep ,

          "f_others_acc" :found.sheet13.f_others_acc ,"gi_others_acc" :found.sheet13.gi_others_acc ,"mi_others_acc" :found.sheet13.mi_others_acc , "ni_others_acc" :found.sheet13.ni_others_acc , "tot_others_acc" :found.sheet13.tot_others_acc , "k_others_pep" : found.sheet13.k_others_pep ,"gi_others_pep" : found.sheet13.gi_others_pep ,"mi_others_pep" : found.sheet13.mi_others_pep ,"tot_others_pep" : found.sheet13.tot_others_pep ,

          "f_tot2_acc" :found.sheet13.f_tot2_acc ,"gi_tot2_acc" :found.sheet13.gi_tot2_acc ,"mi_tot2_acc" :found.sheet13.mi_tot2_acc , "ni_tot2_acc" :found.sheet13.ni_tot2_acc , "tot_tot2_acc" :found.sheet13.tot_tot2_acc , "k_tot2_pep" : found.sheet13.k_tot2_pep ,"gi_tot2_pep" : found.sheet13.gi_tot2_pep ,"mi_tot2_pep" : found.sheet13.mi_tot2_pep ,"tot_tot2_pep" : found.sheet13.tot_tot2_pep ,
        })
        }
        if(option == "traffic_violations"){
          res.render("2018_west/sheet14" , {"f_os_acc" :found.sheet14.f_os_acc ,"gi_os_acc" :found.sheet14.gi_os_acc ,"mi_os_acc" :found.sheet14.mi_os_acc , "ni_os_acc" :found.sheet14.ni_os_acc , "tot_os_acc" :found.sheet14.tot_os_acc , "k_os_pep" : found.sheet14.k_os_pep ,"gi_os_pep" : found.sheet14.gi_os_pep ,"mi_os_pep" : found.sheet14.mi_os_pep ,"tot_os_pep" : found.sheet14.tot_os_pep ,

          "f_dd_acc" :found.sheet14.f_dd_acc ,"gi_dd_acc" :found.sheet14.gi_dd_acc ,"mi_dd_acc" :found.sheet14.mi_dd_acc , "ni_dd_acc" :found.sheet14.ni_dd_acc , "tot_dd_acc" :found.sheet14.tot_dd_acc , "k_dd_pep" : found.sheet14.k_dd_pep ,"gi_dd_pep" : found.sheet14.gi_dd_pep ,"mi_dd_pep" : found.sheet14.mi_dd_pep ,"tot_dd_pep" : found.sheet14.tot_dd_pep ,

          "f_driveonws_acc" :found.sheet14.f_driveonws_acc ,"gi_driveonws_acc" :found.sheet14.gi_driveonws_acc ,"mi_driveonws_acc" :found.sheet14.mi_driveonws_acc , "ni_driveonws_acc" :found.sheet14.ni_driveonws_acc , "tot_driveonws_acc" :found.sheet14.tot_driveonws_acc , "k_driveonws_pep" : found.sheet14.k_driveonws_pep ,"gi_driveonws_pep" : found.sheet14.gi_driveonws_pep ,"mi_driveonws_pep" : found.sheet14.mi_driveonws_pep ,"tot_driveonws_pep" : found.sheet14.tot_driveonws_pep ,

          "f_jrl_acc" :found.sheet14.f_jrl_acc ,"gi_jrl_acc" :found.sheet14.gi_jrl_acc ,"mi_jrl_acc" :found.sheet14.mi_jrl_acc , "ni_jrl_acc" :found.sheet14.ni_jrl_acc , "tot_jrl_acc" :found.sheet14.tot_jrl_acc , "k_jrl_pep" : found.sheet14.k_jrl_pep ,"gi_jrl_pep" : found.sheet14.gi_jrl_pep ,"mi_jrl_pep" : found.sheet14.mi_jrl_pep ,"tot_jrl_pep" : found.sheet14.tot_jrl_pep ,
          
          "f_mobile_acc" :found.sheet14.f_mobile_acc ,"gi_mobile_acc" :found.sheet14.gi_mobile_acc ,"mi_mobile_acc" :found.sheet14.mi_mobile_acc , "ni_mobile_acc" :found.sheet14.ni_mobile_acc , "tot_mobile_acc" :found.sheet14.tot_mobile_acc , "k_mobile_pep" : found.sheet14.k_mobile_pep ,"gi_mobile_pep" : found.sheet14.gi_mobile_pep ,"mi_mobile_pep" : found.sheet14.mi_mobile_pep ,"tot_mobile_pep" : found.sheet14.tot_mobile_pep ,

          "f_others_acc" :found.sheet14.f_others_acc ,"gi_others_acc" :found.sheet14.gi_others_acc ,"mi_others_acc" :found.sheet14.mi_others_acc , "ni_others_acc" :found.sheet14.ni_others_acc , "tot_others_acc" :found.sheet14.tot_others_acc , "k_others_pep" : found.sheet14.k_others_pep ,"gi_others_pep" : found.sheet14.gi_others_pep ,"mi_others_pep" : found.sheet14.mi_others_pep ,"tot_others_pep" : found.sheet14.tot_others_pep ,

          "f_tot_acc" :found.sheet14.f_tot_acc ,"gi_tot_acc" :found.sheet14.gi_tot_acc ,"mi_tot_acc" :found.sheet14.mi_tot_acc , "ni_tot_acc" :found.sheet14.ni_tot_acc , "tot_tot_acc" :found.sheet14.tot_tot_acc , "k_tot_pep" : found.sheet14.k_tot_pep ,"gi_tot_pep" : found.sheet14.gi_tot_pep ,"mi_tot_pep" : found.sheet14.mi_tot_pep ,"tot_tot_pep" : found.sheet14.tot_tot_pep ,

    
        })
        }
        if(option == "safety"){
          res.render("2018_west/sheet15" , { "k_tot_hel" : found.sheet15.k_tot_hel ,"gi_tot_hel" : found.sheet15.gi_tot_hel ,"mi_tot_hel" : found.sheet15.mi_tot_hel ,

          "k_driv_hel" : found.sheet15.k_driv_hel ,"gi_driv_hel" : found.sheet15.gi_driv_hel ,"mi_driv_hel" : found.sheet15.mi_driv_hel ,

          "k_pass_hel" : found.sheet15.k_pass_hel ,"gi_pass_hel" : found.sheet15.gi_pass_hel ,"mi_pass_hel" : found.sheet15.mi_pass_hel ,

          "k_tot_sb" : found.sheet15.k_tot_sb ,"gi_tot_sb" : found.sheet15.gi_tot_sb ,"mi_tot_sb" : found.sheet15.mi_tot_sb ,

          "k_driv_sb" : found.sheet15.k_driv_sb ,"gi_driv_sb" : found.sheet15.gi_driv_sb ,"mi_driv_sb" : found.sheet15.mi_driv_sb ,

          "k_pass_sb" : found.sheet15.k_pass_sb ,"gi_pass_sb" : found.sheet15.gi_pass_sb ,"mi_pass_sb" : found.sheet15.mi_pass_sb ,

    
        })
        }
        if(option == "license"){
          res.render("2018_west/sheet16" , { "f_vpl" : found.sheet16.f_vpl , "gi_vpl" : found.sheet16.gi_vpl , "mi_vpl" : found.sheet16.mi_vpl ,
          "ni_vpl" : found.sheet16.ni_vpl , "tot_vpl" : found.sheet16.tot_vpl ,

          "f_ll" : found.sheet16.f_ll , "gi_ll" : found.sheet16.gi_ll , "mi_ll" : found.sheet16.mi_ll ,
          "ni_ll" : found.sheet16.ni_ll , "tot_ll" : found.sheet16.tot_ll ,

          "f_wl" : found.sheet16.f_wl , "gi_wl" : found.sheet16.gi_wl , "mi_wl" : found.sheet16.mi_wl ,
          "ni_wl" : found.sheet16.ni_wl , "tot_wl" : found.sheet16.tot_wl ,

          "f_notk" : found.sheet16.f_notk , "gi_notk" : found.sheet16.gi_notk , "mi_notk" : found.sheet16.mi_notk ,
          "ni_notk" : found.sheet16.ni_notk , "tot_notk" : found.sheet16.tot_notk ,

          "f_tot" : found.sheet16.f_tot , "gi_tot" : found.sheet16.gi_tot , "mi_tot" : found.sheet16.mi_tot ,
          "ni_tot" : found.sheet16.ni_tot , "tot_tot" : found.sheet16.tot_tot 

    
        })
        }
        if(option == "type_user"){
          res.render("2018_west/sheet17" , {"k_ped_m" :found.sheet17.k_ped_m ,"k_ped_f" :found.sheet17.k_ped_f ,"gi_ped_m" :found.sheet17.gi_ped_m ,"gi_ped_f" :found.sheet17.gi_ped_f ,"mi_ped_m" :found.sheet17.mi_ped_m ,"mi_ped_f" :found.sheet17.mi_ped_f ,"tot_ped_m" :found.sheet17.tot_ped_m ,"tot_ped_f" :found.sheet17.tot_ped_f ,

          "k_byc_tot_m" :found.sheet17.k_byc_tot_m ,"k_byc_tot_f" :found.sheet17.k_byc_tot_f ,"gi_byc_tot_m" :found.sheet17.gi_byc_tot_m ,"gi_byc_tot_f" :found.sheet17.gi_byc_tot_f ,"mi_byc_tot_m" :found.sheet17.mi_byc_tot_m ,"mi_byc_tot_f" :found.sheet17.mi_byc_tot_f ,"tot_byc_tot_m" :found.sheet17.tot_byc_tot_m ,"tot_byc_tot_f" :found.sheet17.tot_byc_tot_f ,

          "k_byc_driv_m" :found.sheet17.k_byc_driv_m ,"k_byc_driv_f" :found.sheet17.k_byc_driv_f ,"gi_byc_driv_m" :found.sheet17.gi_byc_driv_m ,"gi_byc_driv_f" :found.sheet17.gi_byc_driv_f ,"mi_byc_driv_m" :found.sheet17.mi_byc_driv_m ,"mi_byc_driv_f" :found.sheet17.mi_byc_driv_f ,"tot_byc_driv_m" :found.sheet17.tot_byc_driv_m ,"tot_byc_driv_f" :found.sheet17.tot_byc_driv_f ,

          "k_byc_pass_m" :found.sheet17.k_byc_pass_m ,"k_byc_pass_f" :found.sheet17.k_byc_pass_f ,"gi_byc_pass_m" :found.sheet17.gi_byc_pass_m ,"gi_byc_pass_f" :found.sheet17.gi_byc_pass_f ,"mi_byc_pass_m" :found.sheet17.mi_byc_pass_m ,"mi_byc_pass_f" :found.sheet17.mi_byc_pass_f ,"tot_byc_pass_m" :found.sheet17.tot_byc_pass_m ,"tot_byc_pass_f" :found.sheet17.tot_byc_pass_f ,

          "k_2wh_tot_m" :found.sheet17.k_2wh_tot_m ,"k_2wh_tot_f" :found.sheet17.k_2wh_tot_f ,"gi_2wh_tot_m" :found.sheet17.gi_2wh_tot_m ,"gi_2wh_tot_f" :found.sheet17.gi_2wh_tot_f ,"mi_2wh_tot_m" :found.sheet17.mi_2wh_tot_m ,"mi_2wh_tot_f" :found.sheet17.mi_2wh_tot_f ,"tot_2wh_tot_m" :found.sheet17.tot_2wh_tot_m ,"tot_2wh_tot_f" :found.sheet17.tot_2wh_tot_f ,

          "k_2wh_driv_m" :found.sheet17.k_2wh_driv_m ,"k_2wh_driv_f" :found.sheet17.k_2wh_driv_f ,"gi_2wh_driv_m" :found.sheet17.gi_2wh_driv_m ,"gi_2wh_driv_f" :found.sheet17.gi_2wh_driv_f ,"mi_2wh_driv_m" :found.sheet17.mi_2wh_driv_m ,"mi_2wh_driv_f" :found.sheet17.mi_2wh_driv_f ,"tot_2wh_driv_m" :found.sheet17.tot_2wh_driv_m ,"tot_2wh_driv_f" :found.sheet17.tot_2wh_driv_f ,

          "k_2wh_pass_m" :found.sheet17.k_2wh_pass_m ,"k_2wh_pass_f" :found.sheet17.k_2wh_pass_f ,"gi_2wh_pass_m" :found.sheet17.gi_2wh_pass_m ,"gi_2wh_pass_f" :found.sheet17.gi_2wh_pass_f ,"mi_2wh_pass_m" :found.sheet17.mi_2wh_pass_m ,"mi_2wh_pass_f" :found.sheet17.mi_2wh_pass_f ,"tot_2wh_pass_m" :found.sheet17.tot_2wh_pass_m ,"tot_2wh_pass_f" :found.sheet17.tot_2wh_pass_f ,

          "k_rick_tot_m" :found.sheet17.k_rick_tot_m ,"k_rick_tot_f" :found.sheet17.k_rick_tot_f ,"gi_rick_tot_m" :found.sheet17.gi_rick_tot_m ,"gi_rick_tot_f" :found.sheet17.gi_rick_tot_f ,"mi_rick_tot_m" :found.sheet17.mi_rick_tot_m ,"mi_rick_tot_f" :found.sheet17.mi_rick_tot_f ,"tot_rick_tot_m" :found.sheet17.tot_rick_tot_m ,"tot_rick_tot_f" :found.sheet17.tot_rick_tot_f ,

          "k_rick_driv_m" :found.sheet17.k_rick_driv_m ,"k_rick_driv_f" :found.sheet17.k_rick_driv_f ,"gi_rick_driv_m" :found.sheet17.gi_rick_driv_m ,"gi_rick_driv_f" :found.sheet17.gi_rick_driv_f ,"mi_rick_driv_m" :found.sheet17.mi_rick_driv_m ,"mi_rick_driv_f" :found.sheet17.mi_rick_driv_f ,"tot_rick_driv_m" :found.sheet17.tot_rick_driv_m ,"tot_rick_driv_f" :found.sheet17.tot_rick_driv_f ,

          "k_rick_pass_m" :found.sheet17.k_rick_pass_m ,"k_rick_pass_f" :found.sheet17.k_rick_pass_f ,"gi_rick_pass_m" :found.sheet17.gi_rick_pass_m ,"gi_rick_pass_f" :found.sheet17.gi_rick_pass_f ,"mi_rick_pass_m" :found.sheet17.mi_rick_pass_m ,"mi_rick_pass_f" :found.sheet17.mi_rick_pass_f ,"tot_rick_pass_m" :found.sheet17.tot_rick_pass_m ,"tot_rick_pass_f" :found.sheet17.tot_rick_pass_f ,

          "k_4wh_tot_m" :found.sheet17.k_4wh_tot_m ,"k_4wh_tot_f" :found.sheet17.k_4wh_tot_f ,"gi_4wh_tot_m" :found.sheet17.gi_4wh_tot_m ,"gi_4wh_tot_f" :found.sheet17.gi_4wh_tot_f ,"mi_4wh_tot_m" :found.sheet17.mi_4wh_tot_m ,"mi_4wh_tot_f" :found.sheet17.mi_4wh_tot_f ,"tot_4wh_tot_m" :found.sheet17.tot_4wh_tot_m ,"tot_4wh_tot_f" :found.sheet17.tot_4wh_tot_f ,

          "k_4wh_driv_m" :found.sheet17.k_4wh_driv_m ,"k_4wh_driv_f" :found.sheet17.k_4wh_driv_f ,"gi_4wh_driv_m" :found.sheet17.gi_4wh_driv_m ,"gi_4wh_driv_f" :found.sheet17.gi_4wh_driv_f ,"mi_4wh_driv_m" :found.sheet17.mi_4wh_driv_m ,"mi_4wh_driv_f" :found.sheet17.mi_4wh_driv_f ,"tot_4wh_driv_m" :found.sheet17.tot_4wh_driv_m ,"tot_4wh_driv_f" :found.sheet17.tot_4wh_driv_f ,

          "k_4wh_pass_m" :found.sheet17.k_4wh_pass_m ,"k_4wh_pass_f" :found.sheet17.k_4wh_pass_f ,"gi_4wh_pass_m" :found.sheet17.gi_4wh_pass_m ,"gi_4wh_pass_f" :found.sheet17.gi_4wh_pass_f ,"mi_4wh_pass_m" :found.sheet17.mi_4wh_pass_m ,"mi_4wh_pass_f" :found.sheet17.mi_4wh_pass_f ,"tot_4wh_pass_m" :found.sheet17.tot_4wh_pass_m ,"tot_4wh_pass_f" :found.sheet17.tot_4wh_pass_f ,
    
          "k_truck_tot_m" :found.sheet17.k_truck_tot_m ,"k_truck_tot_f" :found.sheet17.k_truck_tot_f ,"gi_truck_tot_m" :found.sheet17.gi_truck_tot_m ,"gi_truck_tot_f" :found.sheet17.gi_truck_tot_f ,"mi_truck_tot_m" :found.sheet17.mi_truck_tot_m ,"mi_truck_tot_f" :found.sheet17.mi_truck_tot_f ,"tot_truck_tot_m" :found.sheet17.tot_truck_tot_m ,"tot_truck_tot_f" :found.sheet17.tot_truck_tot_f ,

          "k_truck_driv_m" :found.sheet17.k_truck_driv_m ,"k_truck_driv_f" :found.sheet17.k_truck_driv_f ,"gi_truck_driv_m" :found.sheet17.gi_truck_driv_m ,"gi_truck_driv_f" :found.sheet17.gi_truck_driv_f ,"mi_truck_driv_m" :found.sheet17.mi_truck_driv_m ,"mi_truck_driv_f" :found.sheet17.mi_truck_driv_f ,"tot_truck_driv_m" :found.sheet17.tot_truck_driv_m ,"tot_truck_driv_f" :found.sheet17.tot_truck_driv_f ,

          "k_truck_pass_m" :found.sheet17.k_truck_pass_m ,"k_truck_pass_f" :found.sheet17.k_truck_pass_f ,"gi_truck_pass_m" :found.sheet17.gi_truck_pass_m ,"gi_truck_pass_f" :found.sheet17.gi_truck_pass_f ,"mi_truck_pass_m" :found.sheet17.mi_truck_pass_m ,"mi_truck_pass_f" :found.sheet17.mi_truck_pass_f ,"tot_truck_pass_m" :found.sheet17.tot_truck_pass_m ,"tot_truck_pass_f" :found.sheet17.tot_truck_pass_f ,

          "k_bus_tot_m" :found.sheet17.k_bus_tot_m ,"k_bus_tot_f" :found.sheet17.k_bus_tot_f ,"gi_bus_tot_m" :found.sheet17.gi_bus_tot_m ,"gi_bus_tot_f" :found.sheet17.gi_bus_tot_f ,"mi_bus_tot_m" :found.sheet17.mi_bus_tot_m ,"mi_bus_tot_f" :found.sheet17.mi_bus_tot_f ,"tot_bus_tot_m" :found.sheet17.tot_bus_tot_m ,"tot_bus_tot_f" :found.sheet17.tot_bus_tot_f ,

          "k_bus_driv_m" :found.sheet17.k_bus_driv_m ,"k_bus_driv_f" :found.sheet17.k_bus_driv_f ,"gi_bus_driv_m" :found.sheet17.gi_bus_driv_m ,"gi_bus_driv_f" :found.sheet17.gi_bus_driv_f ,"mi_bus_driv_m" :found.sheet17.mi_bus_driv_m ,"mi_bus_driv_f" :found.sheet17.mi_bus_driv_f ,"tot_bus_driv_m" :found.sheet17.tot_bus_driv_m ,"tot_bus_driv_f" :found.sheet17.tot_bus_driv_f ,

          "k_bus_pass_m" :found.sheet17.k_bus_pass_m ,"k_bus_pass_f" :found.sheet17.k_bus_pass_f ,"gi_bus_pass_m" :found.sheet17.gi_bus_pass_m ,"gi_bus_pass_f" :found.sheet17.gi_bus_pass_f ,"mi_bus_pass_m" :found.sheet17.mi_bus_pass_m ,"mi_bus_pass_f" :found.sheet17.mi_bus_pass_f ,"tot_bus_pass_m" :found.sheet17.tot_bus_pass_m ,"tot_bus_pass_f" :found.sheet17.tot_bus_pass_f ,

          "k_omv_tot_m" :found.sheet17.k_omv_tot_m ,"k_omv_tot_f" :found.sheet17.k_omv_tot_f ,"gi_omv_tot_m" :found.sheet17.gi_omv_tot_m ,"gi_omv_tot_f" :found.sheet17.gi_omv_tot_f ,"mi_omv_tot_m" :found.sheet17.mi_omv_tot_m ,"mi_omv_tot_f" :found.sheet17.mi_omv_tot_f ,"tot_omv_tot_m" :found.sheet17.tot_omv_tot_m ,"tot_omv_tot_f" :found.sheet17.tot_omv_tot_f ,

          "k_omv_driv_m" :found.sheet17.k_omv_driv_m ,"k_omv_driv_f" :found.sheet17.k_omv_driv_f ,"gi_omv_driv_m" :found.sheet17.gi_omv_driv_m ,"gi_omv_driv_f" :found.sheet17.gi_omv_driv_f ,"mi_omv_driv_m" :found.sheet17.mi_omv_driv_m ,"mi_omv_driv_f" :found.sheet17.mi_omv_driv_f ,"tot_omv_driv_m" :found.sheet17.tot_omv_driv_m ,"tot_omv_driv_f" :found.sheet17.tot_omv_driv_f ,

          "k_omv_pass_m" :found.sheet17.k_omv_pass_m ,"k_omv_pass_f" :found.sheet17.k_omv_pass_f ,"gi_omv_pass_m" :found.sheet17.gi_omv_pass_m ,"gi_omv_pass_f" :found.sheet17.gi_omv_pass_f ,"mi_omv_pass_m" :found.sheet17.mi_omv_pass_m ,"mi_omv_pass_f" :found.sheet17.mi_omv_pass_f ,"tot_omv_pass_m" :found.sheet17.tot_omv_pass_m ,"tot_omv_pass_f" :found.sheet17.tot_omv_pass_f ,

          "k_tot_tot_m" :found.sheet17.k_tot_tot_m ,"k_tot_tot_f" :found.sheet17.k_tot_tot_f ,"gi_tot_tot_m" :found.sheet17.gi_tot_tot_m ,"gi_tot_tot_f" :found.sheet17.gi_tot_tot_f ,"mi_tot_tot_m" :found.sheet17.mi_tot_tot_m ,"mi_tot_tot_f" :found.sheet17.mi_tot_tot_f ,"tot_tot_tot_m" :found.sheet17.tot_tot_tot_m ,"tot_tot_tot_f" :found.sheet17.tot_tot_tot_f ,

          "k_tot_driv_m" :found.sheet17.k_tot_driv_m ,"k_tot_driv_f" :found.sheet17.k_tot_driv_f ,"gi_tot_driv_m" :found.sheet17.gi_tot_driv_m ,"gi_tot_driv_f" :found.sheet17.gi_tot_driv_f ,"mi_tot_driv_m" :found.sheet17.mi_tot_driv_m ,"mi_tot_driv_f" :found.sheet17.mi_tot_driv_f ,"tot_tot_driv_m" :found.sheet17.tot_tot_driv_m ,"tot_tot_driv_f" :found.sheet17.tot_tot_driv_f ,

          "k_tot_pass_m" :found.sheet17.k_tot_pass_m ,"k_tot_pass_f" :found.sheet17.k_tot_pass_f ,"gi_tot_pass_m" :found.sheet17.gi_tot_pass_m ,"gi_tot_pass_f" :found.sheet17.gi_tot_pass_f ,"mi_tot_pass_m" :found.sheet17.mi_tot_pass_m ,"mi_tot_pass_f" :found.sheet17.mi_tot_pass_f ,"tot_tot_pass_m" :found.sheet17.tot_tot_pass_m ,"tot_tot_pass_f" :found.sheet17.tot_tot_pass_f ,
        })
        }
        if(option == "type_adv"){
          res.render("2018_west/sheet18" , {"k_tot_m_driv" :found.sheet18.k_tot_m_driv ,"k_tot_f_driv" :found.sheet18.k_tot_f_driv ,
          "in_tot_m_driv" :found.sheet18.in_tot_m_driv ,"in_tot_f_driv" :found.sheet18.in_tot_f_driv ,"k_18_m_driv" :found.sheet18.k_18_m_driv ,"k_18_f_driv" :found.sheet18.k_18_f_driv ,
          "in_18_m_driv" :found.sheet18.in_18_m_driv ,"in_18_f_driv" :found.sheet18.in_18_f_driv ,"k_1825_m_driv" :found.sheet18.k_1825_m_driv ,"k_1825_f_driv" :found.sheet18.k_1825_f_driv ,
          "in_1825_m_driv" :found.sheet18.in_1825_m_driv ,"in_1825_f_driv" :found.sheet18.in_1825_f_driv ,"k_2535_m_driv" :found.sheet18.k_2535_m_driv ,"k_2535_f_driv" :found.sheet18.k_2535_f_driv ,
          "in_2535_m_driv" :found.sheet18.in_2535_m_driv ,"in_2535_f_driv" :found.sheet18.in_2535_f_driv ,"k_3545_m_driv" :found.sheet18.k_3545_m_driv ,"k_3545_f_driv" :found.sheet18.k_3545_f_driv ,
          "in_3545_m_driv" :found.sheet18.in_3545_m_driv ,"in_3545_f_driv" :found.sheet18.in_3545_f_driv ,"k_4560_m_driv" :found.sheet18.k_4560_m_driv ,"k_4560_f_driv" :found.sheet18.k_4560_f_driv ,
          "in_4560_m_driv" :found.sheet18.in_4560_m_driv ,"in_4560_f_driv" :found.sheet18.in_4560_f_driv ,"k_60_m_driv" :found.sheet18.k_60_m_driv ,"k_60_f_driv" :found.sheet18.k_60_f_driv ,
          "in_60_m_driv" :found.sheet18.in_60_m_driv ,"in_60_f_driv" :found.sheet18.in_60_f_driv ,"k_notk_m_driv" :found.sheet18.k_notk_m_driv ,"k_notk_f_driv" :found.sheet18.k_notk_f_driv ,
          "in_notk_m_driv" :found.sheet18.in_notk_m_driv ,"in_notk_f_driv" :found.sheet18.in_notk_f_driv ,

          "k_tot_m_pass" :found.sheet18.k_tot_m_pass ,"k_tot_f_pass" :found.sheet18.k_tot_f_pass ,
          "in_tot_m_pass" :found.sheet18.in_tot_m_pass ,"in_tot_f_pass" :found.sheet18.in_tot_f_pass ,"k_18_m_pass" :found.sheet18.k_18_m_pass ,"k_18_f_pass" :found.sheet18.k_18_f_pass ,
          "in_18_m_pass" :found.sheet18.in_18_m_pass ,"in_18_f_pass" :found.sheet18.in_18_f_pass ,"k_1825_m_pass" :found.sheet18.k_1825_m_pass ,"k_1825_f_pass" :found.sheet18.k_1825_f_pass ,
          "in_1825_m_pass" :found.sheet18.in_1825_m_pass ,"in_1825_f_pass" :found.sheet18.in_1825_f_pass ,"k_2535_m_pass" :found.sheet18.k_2535_m_pass ,"k_2535_f_pass" :found.sheet18.k_2535_f_pass ,
          "in_2535_m_pass" :found.sheet18.in_2535_m_pass ,"in_2535_f_pass" :found.sheet18.in_2535_f_pass ,"k_3545_m_pass" :found.sheet18.k_3545_m_pass ,"k_3545_f_pass" :found.sheet18.k_3545_f_pass ,
          "in_3545_m_pass" :found.sheet18.in_3545_m_pass ,"in_3545_f_pass" :found.sheet18.in_3545_f_pass ,"k_4560_m_pass" :found.sheet18.k_4560_m_pass ,"k_4560_f_pass" :found.sheet18.k_4560_f_pass ,
          "in_4560_m_pass" :found.sheet18.in_4560_m_pass ,"in_4560_f_pass" :found.sheet18.in_4560_f_pass ,"k_60_m_pass" :found.sheet18.k_60_m_pass ,"k_60_f_pass" :found.sheet18.k_60_f_pass ,
          "in_60_m_pass" :found.sheet18.in_60_m_pass ,"in_60_f_pass" :found.sheet18.in_60_f_pass ,"k_notk_m_pass" :found.sheet18.k_notk_m_pass ,"k_notk_f_pass" :found.sheet18.k_notk_f_pass ,
          "in_notk_m_pass" :found.sheet18.in_notk_m_pass ,"in_notk_f_pass" :found.sheet18.in_notk_f_pass ,

          "k_tot_m_ped" :found.sheet18.k_tot_m_ped ,"k_tot_f_ped" :found.sheet18.k_tot_f_ped ,
          "in_tot_m_ped" :found.sheet18.in_tot_m_ped ,"in_tot_f_ped" :found.sheet18.in_tot_f_ped ,"k_18_m_ped" :found.sheet18.k_18_m_ped ,"k_18_f_ped" :found.sheet18.k_18_f_ped ,
          "in_18_m_ped" :found.sheet18.in_18_m_ped ,"in_18_f_ped" :found.sheet18.in_18_f_ped ,"k_1825_m_ped" :found.sheet18.k_1825_m_ped ,"k_1825_f_ped" :found.sheet18.k_1825_f_ped ,
          "in_1825_m_ped" :found.sheet18.in_1825_m_ped ,"in_1825_f_ped" :found.sheet18.in_1825_f_ped ,"k_2535_m_ped" :found.sheet18.k_2535_m_ped ,"k_2535_f_ped" :found.sheet18.k_2535_f_ped ,
          "in_2535_m_ped" :found.sheet18.in_2535_m_ped ,"in_2535_f_ped" :found.sheet18.in_2535_f_ped ,"k_3545_m_ped" :found.sheet18.k_3545_m_ped ,"k_3545_f_ped" :found.sheet18.k_3545_f_ped ,
          "in_3545_m_ped" :found.sheet18.in_3545_m_ped ,"in_3545_f_ped" :found.sheet18.in_3545_f_ped ,"k_4560_m_ped" :found.sheet18.k_4560_m_ped ,"k_4560_f_ped" :found.sheet18.k_4560_f_ped ,
          "in_4560_m_ped" :found.sheet18.in_4560_m_ped ,"in_4560_f_ped" :found.sheet18.in_4560_f_ped ,"k_60_m_ped" :found.sheet18.k_60_m_ped ,"k_60_f_ped" :found.sheet18.k_60_f_ped ,
          "in_60_m_ped" :found.sheet18.in_60_m_ped ,"in_60_f_ped" :found.sheet18.in_60_f_ped ,"k_notk_m_ped" :found.sheet18.k_notk_m_ped ,"k_notk_f_ped" :found.sheet18.k_notk_f_ped ,
          "in_notk_m_ped" :found.sheet18.in_notk_m_ped ,"in_notk_f_ped" :found.sheet18.in_notk_f_ped ,

          "k_tot_m_cyc" :found.sheet18.k_tot_m_cyc ,"k_tot_f_cyc" :found.sheet18.k_tot_f_cyc ,
          "in_tot_m_cyc" :found.sheet18.in_tot_m_cyc ,"in_tot_f_cyc" :found.sheet18.in_tot_f_cyc ,"k_18_m_cyc" :found.sheet18.k_18_m_cyc ,"k_18_f_cyc" :found.sheet18.k_18_f_cyc ,
          "in_18_m_cyc" :found.sheet18.in_18_m_cyc ,"in_18_f_cyc" :found.sheet18.in_18_f_cyc ,"k_1825_m_cyc" :found.sheet18.k_1825_m_cyc ,"k_1825_f_cyc" :found.sheet18.k_1825_f_cyc ,
          "in_1825_m_cyc" :found.sheet18.in_1825_m_cyc ,"in_1825_f_cyc" :found.sheet18.in_1825_f_cyc ,"k_2535_m_cyc" :found.sheet18.k_2535_m_cyc ,"k_2535_f_cyc" :found.sheet18.k_2535_f_cyc ,
          "in_2535_m_cyc" :found.sheet18.in_2535_m_cyc ,"in_2535_f_cyc" :found.sheet18.in_2535_f_cyc ,"k_3545_m_cyc" :found.sheet18.k_3545_m_cyc ,"k_3545_f_cyc" :found.sheet18.k_3545_f_cyc ,
          "in_3545_m_cyc" :found.sheet18.in_3545_m_cyc ,"in_3545_f_cyc" :found.sheet18.in_3545_f_cyc ,"k_4560_m_cyc" :found.sheet18.k_4560_m_cyc ,"k_4560_f_cyc" :found.sheet18.k_4560_f_cyc ,
          "in_4560_m_cyc" :found.sheet18.in_4560_m_cyc ,"in_4560_f_cyc" :found.sheet18.in_4560_f_cyc ,"k_60_m_cyc" :found.sheet18.k_60_m_cyc ,"k_60_f_cyc" :found.sheet18.k_60_f_cyc ,
          "in_60_m_cyc" :found.sheet18.in_60_m_cyc ,"in_60_f_cyc" :found.sheet18.in_60_f_cyc ,"k_notk_m_cyc" :found.sheet18.k_notk_m_cyc ,"k_notk_f_cyc" :found.sheet18.k_notk_f_cyc ,
          "in_notk_m_cyc" :found.sheet18.in_notk_m_cyc ,"in_notk_f_cyc" :found.sheet18.in_notk_f_cyc ,

          "k_tot_m_tot" :found.sheet18.k_tot_m_tot ,"k_tot_f_tot" :found.sheet18.k_tot_f_tot ,
          "in_tot_m_tot" :found.sheet18.in_tot_m_tot ,"in_tot_f_tot" :found.sheet18.in_tot_f_tot ,"k_18_m_tot" :found.sheet18.k_18_m_tot ,"k_18_f_tot" :found.sheet18.k_18_f_tot ,
          "in_18_m_tot" :found.sheet18.in_18_m_tot ,"in_18_f_tot" :found.sheet18.in_18_f_tot ,"k_1825_m_tot" :found.sheet18.k_1825_m_tot ,"k_1825_f_tot" :found.sheet18.k_1825_f_tot ,
          "in_1825_m_tot" :found.sheet18.in_1825_m_tot ,"in_1825_f_tot" :found.sheet18.in_1825_f_tot ,"k_2535_m_tot" :found.sheet18.k_2535_m_tot ,"k_2535_f_tot" :found.sheet18.k_2535_f_tot ,
          "in_2535_m_tot" :found.sheet18.in_2535_m_tot ,"in_2535_f_tot" :found.sheet18.in_2535_f_tot ,"k_3545_m_tot" :found.sheet18.k_3545_m_tot ,"k_3545_f_tot" :found.sheet18.k_3545_f_tot ,
          "in_3545_m_tot" :found.sheet18.in_3545_m_tot ,"in_3545_f_tot" :found.sheet18.in_3545_f_tot ,"k_4560_m_tot" :found.sheet18.k_4560_m_tot ,"k_4560_f_tot" :found.sheet18.k_4560_f_tot ,
          "in_4560_m_tot" :found.sheet18.in_4560_m_tot ,"in_4560_f_tot" :found.sheet18.in_4560_f_tot ,"k_60_m_tot" :found.sheet18.k_60_m_tot ,"k_60_f_tot" :found.sheet18.k_60_f_tot ,
          "in_60_m_tot" :found.sheet18.in_60_m_tot ,"in_60_f_tot" :found.sheet18.in_60_f_tot ,"k_notk_m_tot" :found.sheet18.k_notk_m_tot ,"k_notk_f_tot" :found.sheet18.k_notk_f_tot ,
          "in_notk_m_tot" :found.sheet18.in_notk_m_tot ,"in_notk_f_tot" :found.sheet18.in_notk_f_tot 

        })
      }
      if(option == "highway"){
        res.render("2018_west/sheet19" , {"tot_nh" :found.sheet19.tot_nh 
        ,"k_nh" :found.sheet19.k_nh ,"tot_sh" :found.sheet19.tot_sh 
        ,"k_sh" :found.sheet19.k_sh ,"tot_other" :found.sheet19.tot_other 
        ,"k_other" :found.sheet19.k_other, "tot_tot" :found.sheet19.tot_tot 
        ,"k_tot" :found.sheet19.k_tot }
        )
      }
      if(option == "highway_people"){
        res.render("2018_west/sheet20" , {"ped_acc_nh" : found.sheet20.ped_acc_nh , "ped_pep_nh" : found.sheet20.ped_pep_nh ,"ped_acc_sh" : found.sheet20.ped_acc_sh , "ped_pep_sh" : found.sheet20.ped_pep_sh ,"ped_acc_oth" : found.sheet20.ped_acc_oth , "ped_pep_oth" : found.sheet20.ped_pep_oth ,
      
        "bcy_acc_nh" : found.sheet20.bcy_acc_nh , "bcy_pep_nh" : found.sheet20.bcy_pep_nh ,"bcy_acc_sh" : found.sheet20.bcy_acc_sh , "bcy_pep_sh" : found.sheet20.bcy_pep_sh ,"bcy_acc_oth" : found.sheet20.bcy_acc_oth , "bcy_pep_oth" : found.sheet20.bcy_pep_oth ,
      
        "twoWH_acc_nh" : found.sheet20.twoWH_acc_nh , "twoWH_pep_nh" : found.sheet20.twoWH_pep_nh ,"twoWH_acc_sh" : found.sheet20.twoWH_acc_sh , "twoWH_pep_sh" : found.sheet20.twoWH_pep_sh ,"twoWH_acc_oth" : found.sheet20.twoWH_acc_oth , "twoWH_pep_oth" : found.sheet20.twoWH_pep_oth ,
      
        "rick_acc_nh" : found.sheet20.rick_acc_nh , "rick_pep_nh" : found.sheet20.rick_pep_nh ,"rick_acc_sh" : found.sheet20.rick_acc_sh , "rick_pep_sh" : found.sheet20.rick_pep_sh ,"rick_acc_oth" : found.sheet20.rick_acc_oth , "rick_pep_oth" : found.sheet20.rick_pep_oth ,

        "fourWH_acc_nh" : found.sheet20.fourWH_acc_nh , "fourWH_pep_nh" : found.sheet20.fourWH_pep_nh ,"fourWH_acc_sh" : found.sheet20.fourWH_acc_sh , "fourWH_pep_sh" : found.sheet20.fourWH_pep_sh ,"fourWH_acc_oth" : found.sheet20.fourWH_acc_oth , "fourWH_pep_oth" : found.sheet20.fourWH_pep_oth ,

        "truck_acc_nh" : found.sheet20.truck_acc_nh , "truck_pep_nh" : found.sheet20.truck_pep_nh ,"truck_acc_sh" : found.sheet20.truck_acc_sh , "truck_pep_sh" : found.sheet20.truck_pep_sh ,"truck_acc_oth" : found.sheet20.truck_acc_oth , "truck_pep_oth" : found.sheet20.truck_pep_oth ,

        "bus_acc_nh" : found.sheet20.bus_acc_nh , "bus_pep_nh" : found.sheet20.bus_pep_nh ,"bus_acc_sh" : found.sheet20.bus_acc_sh , "bus_pep_sh" : found.sheet20.bus_pep_sh ,"bus_acc_oth" : found.sheet20.bus_acc_oth , "bus_pep_oth" : found.sheet20.bus_pep_oth ,

        "others_acc_nh" : found.sheet20.others_acc_nh , "others_pep_nh" : found.sheet20.others_pep_nh ,"others_acc_sh" : found.sheet20.others_acc_sh , "others_pep_sh" : found.sheet20.others_pep_sh ,"others_acc_oth" : found.sheet20.others_acc_oth , "others_pep_oth" : found.sheet20.others_pep_oth ,

        "tot_acc_nh" : found.sheet20.tot_acc_nh , "tot_pep_nh" : found.sheet20.tot_pep_nh ,"tot_acc_sh" : found.sheet20.tot_acc_sh , "tot_pep_sh" : found.sheet20.tot_pep_sh ,"tot_acc_oth" : found.sheet20.tot_acc_oth , "tot_pep_oth" : found.sheet20.tot_pep_oth ,
      }
        )
      }
      if(option == "highway_traffic"){
        res.render("2018_west/sheet21" , {"os_acc_nh" : found.sheet21.os_acc_nh , "os_pep_nh" : found.sheet21.os_pep_nh ,"os_acc_sh" : found.sheet21.os_acc_sh , "os_pep_sh" : found.sheet21.os_pep_sh ,"os_acc_oth" : found.sheet21.os_acc_oth , "os_pep_oth" : found.sheet21.os_pep_oth ,

        "dd_acc_nh" : found.sheet21.dd_acc_nh , "dd_pep_nh" : found.sheet21.dd_pep_nh ,"dd_acc_sh" : found.sheet21.dd_acc_sh , "dd_pep_sh" : found.sheet21.dd_pep_sh ,"dd_acc_oth" : found.sheet21.dd_acc_oth , "dd_pep_oth" : found.sheet21.dd_pep_oth ,

        "driveoWS_acc_nh" : found.sheet21.driveoWS_acc_nh , "driveoWS_pep_nh" : found.sheet21.driveoWS_pep_nh ,"driveoWS_acc_sh" : found.sheet21.driveoWS_acc_sh , "driveoWS_pep_sh" : found.sheet21.driveoWS_pep_sh ,"driveoWS_acc_oth" : found.sheet21.driveoWS_acc_oth , "driveoWS_pep_oth" : found.sheet21.driveoWS_pep_oth ,

        "jrl_acc_nh" : found.sheet21.jrl_acc_nh , "jrl_pep_nh" : found.sheet21.jrl_pep_nh ,"jrl_acc_sh" : found.sheet21.jrl_acc_sh , "jrl_pep_sh" : found.sheet21.jrl_pep_sh ,"jrl_acc_oth" : found.sheet21.jrl_acc_oth , "jrl_pep_oth" : found.sheet21.jrl_pep_oth ,

        "mobile_acc_nh" : found.sheet21.mobile_acc_nh , "mobile_pep_nh" : found.sheet21.mobile_pep_nh ,"mobile_acc_sh" : found.sheet21.mobile_acc_sh , "mobile_pep_sh" : found.sheet21.mobile_pep_sh ,"mobile_acc_oth" : found.sheet21.mobile_acc_oth , "mobile_pep_oth" : found.sheet21.mobile_pep_oth ,
       
        "others_acc_nh" : found.sheet21.others_acc_nh , "others_pep_nh" : found.sheet21.others_pep_nh ,"others_acc_sh" : found.sheet21.others_acc_sh , "others_pep_sh" : found.sheet21.others_pep_sh ,"others_acc_oth" : found.sheet21.others_acc_oth , "others_pep_oth" : found.sheet21.others_pep_oth ,

        "tot_acc_nh" : found.sheet21.tot_acc_nh , "tot_pep_nh" : found.sheet21.tot_pep_nh ,"tot_acc_sh" : found.sheet21.tot_acc_sh , "tot_pep_sh" : found.sheet21.tot_pep_sh ,"tot_acc_oth" : found.sheet21.tot_acc_oth , "tot_pep_oth" : found.sheet21.tot_pep_oth ,

      }
        )
    }
    }
  
  }
)
  }
}
);
app.get("/new" , function(req,res){
  res.render("new")
})
app.post("/compose", function (req, res) {
  const params = req.body.sheet;
  const y = req.body.year;
  const s = req.body.spot;
  Year.findOne({ year: y , spot : s} , function(err ,found){
    if(err){
      console.log(err)
    }
    else{
      if(found){
        if(params == 1){
          res.render("sheet/1");
        }
        if(params == 2){
          res.render("sheet/2");
        }
        if(params == 3){
          res.render("sheet/3");
        }
        if(params == 4){
          res.render("sheet/4");
        }
        if(params == 5){
          res.render("sheet/5");
        }
        if(params == 6){
          res.render("sheet/6");
        }
        if(params == 7){
          res.render("sheet/7");
        }
        if(params == 8){
          res.render("sheet/8");
        }
        if(params == 9){
          res.render("sheet/9");
        }
        if(params == 10){
          res.render("sheet/10");
        }
        if(params == 11){
          res.render("sheet/11");
        }
        if(params == 12){
          res.render("sheet/12");
        }
        if(params == 13){
          res.render("sheet/13");
        }
        if(params == 14){
          res.render("sheet/14");
        }
        if(params == 15){
          res.render("sheet/15");
        }
        if(params == 16){
          res.render("sheet/16");
        }
        if(params == 17){
          res.render("sheet/17");
        }
        if(params == 18){
          res.render("sheet/18");
        }
        if(params == 19){
          res.render("sheet/19");
        }
        if(params == 20){
          res.render("sheet/20");
        }
        if(params == 21){
          res.render("sheet/21");
        }

      }
      else{
        const newYear = new Year({
          year : y,
          spot : s,
        })
        newYear.save()
        res.redirect("/new")
      }
    }
  });
  })
app.post("/1", function(req,res){
  var month = req.body.month;
  var type = req.body.type;
  var people = req.body.people;
  var year = req.body.year;
  const s = req.body.spot;
  if(month == 1){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_jan_acc"  : 1 , "sheet1.tot_jan_acc" : 1 , "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1 }} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_jan_acc"  : 1 , "sheet1.tot_jan_acc" : 1 , "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){ 
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_jan_acc"  : 1 , "sheet1.tot_jan_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_jan_acc"  : 1 , "sheet1.tot_jan_acc" : 1 , "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_jan_pep"  : 1 , "sheet1.tot_jan_pep" : 1 , "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_jan_pep"  : 1 , "sheet1.tot_jan_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_jan_pep"  : 1 , "sheet1.tot_jan_pep" : 1 , "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 2){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_feb_acc"  : 1 , "sheet1.tot_feb_acc" : 1 , "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_feb_acc"  : 1 , "sheet1.tot_feb_acc" : 1 , "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_feb_acc"  : 1 , "sheet1.tot_feb_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_feb_acc"  : 1 , "sheet1.tot_feb_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_feb_pep"  : 1 , "sheet1.tot_feb_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_feb_pep"  : 1 , "sheet1.tot_feb_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_feb_pep"  : 1 , "sheet1.tot_feb_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 3){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot  : s} ,{$inc : {"sheet1.f_mar_acc"  : 1 , "sheet1.tot_mar_acc" : 1, "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot  : s} ,{$inc : {"sheet1.gi_mar_acc"  : 1 , "sheet1.tot_mar_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot  : s} ,{$inc : {"sheet1.mi_mar_acc"  : 1 , "sheet1.tot_mar_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot  : s} ,{$inc : {"sheet1.ni_mar_acc"  : 1 , "sheet1.tot_mar_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot  : s} ,{$inc : {"sheet1.kil_mar_pep"  : 1 , "sheet1.tot_mar_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot  : s} ,{$inc : {"sheet1.gi_mar_pep"  : 1 , "sheet1.tot_mar_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot  : s} ,{$inc : {"sheet1.mi_mar_pep"  : 1 , "sheet1.tot_mar_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 4){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_apr_acc"  : 1 , "sheet1.tot_apr_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_apr_acc"  : 1 , "sheet1.tot_apr_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_apr_acc"  : 1 , "sheet1.tot_apr_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_apr_acc"  : 1 , "sheet1.tot_apr_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_apr_pep"  : 1 , "sheet1.tot_apr_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_apr_pep"  : 1 , "sheet1.tot_apr_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_apr_pep"  : 1 , "sheet1.tot_apr_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 5){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_may_acc"  : 1 , "sheet1.tot_may_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_may_acc"  : 1 , "sheet1.tot_may_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_may_acc"  : 1 , "sheet1.tot_may_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_may_acc"  : 1 , "sheet1.tot_may_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_may_pep"  : 1 , "sheet1.tot_may_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_may_pep"  : 1 , "sheet1.tot_may_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_may_pep"  : 1 , "sheet1.tot_may_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 6){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_jun_acc"  : 1 , "sheet1.tot_jun_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_jun_acc"  : 1 , "sheet1.tot_jun_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_jun_acc"  : 1 , "sheet1.tot_jun_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_jun_acc"  : 1 , "sheet1.tot_jun_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_jun_pep"  : 1 , "sheet1.tot_jun_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_jun_pep"  : 1 , "sheet1.tot_jun_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_jun_pep"  : 1 , "sheet1.tot_jun_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 7){
    if(type == 1){
      Year.findOneAndUpdate({year : year  , spot : s} ,{$inc : {"sheet1.f_jul_acc"  : 1 , "sheet1.tot_jul_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year  , spot : s} ,{$inc : {"sheet1.gi_jul_acc"  : 1 , "sheet1.tot_jul_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year  , spot : s} ,{$inc : {"sheet1.mi_jul_acc"  : 1 , "sheet1.tot_jul_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year  , spot : s} ,{$inc : {"sheet1.ni_jul_acc"  : 1 , "sheet1.tot_jul_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year  , spot : s} ,{$inc : {"sheet1.kil_jul_pep"  : 1 , "sheet1.tot_jul_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year  , spot : s} ,{$inc : {"sheet1.gi_jul_pep"  : 1 , "sheet1.tot_jul_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year  , spot : s} ,{$inc : {"sheet1.mi_jul_pep"  : 1 , "sheet1.tot_jul_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 8){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_aug_acc"  : 1 , "sheet1.tot_aug_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_aug_acc"  : 1 , "sheet1.tot_aug_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_aug_acc"  : 1 , "sheet1.tot_aug_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_aug_acc"  : 1 , "sheet1.tot_aug_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_aug_pep"  : 1 , "sheet1.tot_aug_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_aug_pep"  : 1 , "sheet1.tot_aug_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_aug_pep"  : 1 , "sheet1.tot_aug_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 9){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_sep_acc"  : 1 , "sheet1.tot_sep_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_sep_acc"  : 1 , "sheet1.tot_sep_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_sep_acc"  : 1 , "sheet1.tot_sep_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_sep_acc"  : 1 , "sheet1.tot_sep_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_sep_pep"  : 1 , "sheet1.tot_sep_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_sep_pep"  : 1 , "sheet1.tot_sep_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_sep_pep"  : 1 , "sheet1.tot_sep_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  if(month == 10){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_oct_acc"  : 1 , "sheet1.tot_oct_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_oct_acc"  : 1 , "sheet1.tot_oct_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_oct_acc"  : 1 , "sheet1.tot_oct_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_oct_acc"  : 1 , "sheet1.tot_oct_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_oct_pep"  : 1 , "sheet1.tot_oct_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_oct_pep"  : 1 , "sheet1.tot_oct_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_oct_pep"  : 1 , "sheet1.tot_oct_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
   if(month == 11){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_nov_acc"  : 1 , "sheet1.tot_nov_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_nov_acc"  : 1 , "sheet1.tot_nov_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_nov_acc"  : 1 , "sheet1.tot_nov_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_nov_acc"  : 1 , "sheet1.tot_nov_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_nov_pep"  : 1 , "sheet1.tot_nov_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_nov_pep"  : 1 , "sheet1.tot_nov_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_nov_pep"  : 1 , "sheet1.tot_nov_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })}
  }
  if(month == 12){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.f_dec_acc"  : 1 , "sheet1.tot_dec_acc" : 1 ,  "sheet1.f_tot_acc" :1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_dec_acc"  : 1 , "sheet1.tot_dec_acc" : 1, "sheet1.gi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_dec_acc"  : 1 , "sheet1.tot_dec_acc" : 1 , "sheet1.mi_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.ni_dec_acc"  : 1 , "sheet1.tot_dec_acc" : 1, "sheet1.ni_tot_acc" : 1 , "sheet1.tot_tot_acc" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
    }
    if(people == 1){
        Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.kil_dec_pep"  : 1 , "sheet1.tot_dec_pep" : 1, "sheet1.kil_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
          if(err){
            console.log(err);
          }
        })
      
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.gi_dec_pep"  : 1 , "sheet1.tot_dec_pep" : 1 , "sheet1.gi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
        if(err){
          console.log(err);
        }
      })
  }
  if(people == 3){
    Year.findOneAndUpdate({year : year , spot : s} ,{$inc : {"sheet1.mi_dec_pep"  : 1 , "sheet1.tot_dec_pep" : 1, "sheet1.mi_tot_pep" : 1 , "sheet1.tot_tot_pep" : 1}} ,function(err , found){
      if(err){
        console.log(err);
      }
    })
}
  }
  res.send("Data Updated")
} )
app.post("/2"  ,function(req,res){
  const year = req.body.year;
  const spot = req.body.spot;
  const time = req.body.time;
  const area = req.body.area;
  const type = req.body.type;
  const people = req.body.people;
  if(time == 69){
    if(area == 1){
      if(type == 1){
        console.log("Working")
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_69_acc" : 1 , "sheet2.tot_rur_69_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_69_acc" : 1 , "sheet2.tot_rur_69_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_69_acc" : 1 , "sheet2.tot_rur_69_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_69_acc" : 1 , "sheet2.tot_rur_69_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_69_pep" : 1 , "sheet2.tot_rur_69_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_69_pep" : 1 , "sheet2.tot_rur_69_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_69_pep" : 1 , "sheet2.tot_rur_69_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_69_acc" : 1 , "sheet2.tot_urb_69_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_69_acc" : 1 , "sheet2.tot_urb_69_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_69_acc" : 1 , "sheet2.tot_urb_69_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_69_acc" : 1 , "sheet2.tot_urb_69_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_69_pep" : 1 , "sheet2.tot_urb_69_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_69_pep" : 1 , "sheet2.tot_urb_69_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_69_pep" : 1 , "sheet2.tot_urb_69_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  if(time == 912){
    if(area == 1){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_912_acc" : 1 , "sheet2.tot_rur_912_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_912_acc" : 1 , "sheet2.tot_rur_912_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_912_acc" : 1 , "sheet2.tot_rur_912_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_912_acc" : 1 , "sheet2.tot_rur_912_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_912_pep" : 1 , "sheet2.tot_rur_912_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_912_pep" : 1 , "sheet2.tot_rur_912_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_912_pep" : 1 , "sheet2.tot_rur_912_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_912_acc" : 1 , "sheet2.tot_urb_912_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_912_acc" : 1 , "sheet2.tot_urb_912_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_912_acc" : 1 , "sheet2.tot_urb_912_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_912_acc" : 1 , "sheet2.tot_urb_912_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_912_pep" : 1 , "sheet2.tot_urb_912_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_912_pep" : 1 , "sheet2.tot_urb_912_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_912_pep" : 1 , "sheet2.tot_urb_912_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  if(time == 1215){
    if(area == 1){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_1215_acc" : 1 , "sheet2.tot_rur_1215_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_1215_acc" : 1 , "sheet2.tot_rur_1215_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_1215_acc" : 1 , "sheet2.tot_rur_1215_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_1215_acc" : 1 , "sheet2.tot_rur_1215_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_1215_pep" : 1 , "sheet2.tot_rur_1215_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_1215_pep" : 1 , "sheet2.tot_rur_1215_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_1215_pep" : 1 , "sheet2.tot_rur_1215_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_1215_acc" : 1 , "sheet2.tot_urb_1215_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_1215_acc" : 1 , "sheet2.tot_urb_1215_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_1215_acc" : 1 , "sheet2.tot_urb_1215_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_1215_acc" : 1 , "sheet2.tot_urb_1215_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_1215_pep" : 1 , "sheet2.tot_urb_1215_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_1215_pep" : 1 , "sheet2.tot_urb_1215_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_1215_pep" : 1 , "sheet2.tot_urb_1215_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  if(time == 1518){
    if(area == 1){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_1518_acc" : 1 , "sheet2.tot_rur_1518_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_1518_acc" : 1 , "sheet2.tot_rur_1518_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_1518_acc" : 1 , "sheet2.tot_rur_1518_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_1518_acc" : 1 , "sheet2.tot_rur_1518_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_1518_pep" : 1 , "sheet2.tot_rur_1518_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_1518_pep" : 1 , "sheet2.tot_rur_1518_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_1518_pep" : 1 , "sheet2.tot_rur_1518_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_1518_acc" : 1 , "sheet2.tot_urb_1518_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_1518_acc" : 1 , "sheet2.tot_urb_1518_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_1518_acc" : 1 , "sheet2.tot_urb_1518_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_1518_acc" : 1 , "sheet2.tot_urb_1518_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_1518_pep" : 1 , "sheet2.tot_urb_1518_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_1518_pep" : 1 , "sheet2.tot_urb_1518_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_1518_pep" : 1 , "sheet2.tot_urb_1518_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  if(time == 1821){
    if(area == 1){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_1821_acc" : 1 , "sheet2.tot_rur_1821_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_1821_acc" : 1 , "sheet2.tot_rur_1821_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_1821_acc" : 1 , "sheet2.tot_rur_1821_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_1821_acc" : 1 , "sheet2.tot_rur_1821_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_1821_pep" : 1 , "sheet2.tot_rur_1821_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_1821_pep" : 1 , "sheet2.tot_rur_1821_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_1821_pep" : 1 , "sheet2.tot_rur_1821_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_1821_acc" : 1 , "sheet2.tot_urb_1821_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_1821_acc" : 1 , "sheet2.tot_urb_1821_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_1821_acc" : 1 , "sheet2.tot_urb_1821_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_1821_acc" : 1 , "sheet2.tot_urb_1821_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_1821_pep" : 1 , "sheet2.tot_urb_1821_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_1821_pep" : 1 , "sheet2.tot_urb_1821_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_1821_pep" : 1 , "sheet2.tot_urb_1821_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  if(time == 2124){
    if(area == 1){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_2124_acc" : 1 , "sheet2.tot_rur_2124_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_2124_acc" : 1 , "sheet2.tot_rur_2124_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_2124_acc" : 1 , "sheet2.tot_rur_2124_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_2124_acc" : 1 , "sheet2.tot_rur_2124_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_2124_pep" : 1 , "sheet2.tot_rur_2124_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_2124_pep" : 1 , "sheet2.tot_rur_2124_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_2124_pep" : 1 , "sheet2.tot_rur_2124_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_2124_acc" : 1 , "sheet2.tot_urb_2124_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_2124_acc" : 1 , "sheet2.tot_urb_2124_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_2124_acc" : 1 , "sheet2.tot_urb_2124_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_2124_acc" : 1 , "sheet2.tot_urb_2124_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_2124_pep" : 1 , "sheet2.tot_urb_2124_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_2124_pep" : 1 , "sheet2.tot_urb_2124_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_2124_pep" : 1 , "sheet2.tot_urb_2124_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  if(time == 003){
    if(area == 1){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_003_acc" : 1 , "sheet2.tot_rur_003_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_003_acc" : 1 , "sheet2.tot_rur_003_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_003_acc" : 1 , "sheet2.tot_rur_003_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_003_acc" : 1 , "sheet2.tot_rur_003_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_003_pep" : 1 , "sheet2.tot_rur_003_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_003_pep" : 1 , "sheet2.tot_rur_003_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_003_pep" : 1 , "sheet2.tot_rur_003_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_003_acc" : 1 , "sheet2.tot_urb_003_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_003_acc" : 1 , "sheet2.tot_urb_003_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_003_acc" : 1 , "sheet2.tot_urb_003_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_003_acc" : 1 , "sheet2.tot_urb_003_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_003_pep" : 1 , "sheet2.tot_urb_003_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_003_pep" : 1 , "sheet2.tot_urb_003_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_003_pep" : 1 , "sheet2.tot_urb_003_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  if(time == 36){
    if(area == 1){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_36_acc" : 1 , "sheet2.tot_rur_36_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_36_acc" : 1 , "sheet2.tot_rur_36_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_36_acc" : 1 , "sheet2.tot_rur_36_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_36_acc" : 1 , "sheet2.tot_rur_36_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_36_pep" : 1 , "sheet2.tot_rur_36_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_36_pep" : 1 , "sheet2.tot_rur_36_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_36_pep" : 1 , "sheet2.tot_rur_36_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_36_acc" : 1 , "sheet2.tot_urb_36_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_36_acc" : 1 , "sheet2.tot_urb_36_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_36_acc" : 1 , "sheet2.tot_urb_36_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_36_acc" : 1 , "sheet2.tot_urb_36_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_36_pep" : 1 , "sheet2.tot_urb_36_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_36_pep" : 1 , "sheet2.tot_urb_36_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_36_pep" : 1 , "sheet2.tot_urb_36_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  if(time == "unk"){
    if(area == 1){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_rur_unk_acc" : 1 , "sheet2.tot_rur_unk_acc" : 1 , "sheet2.f_rur_tot_acc"  :1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_unk_acc" : 1 , "sheet2.tot_rur_unk_acc" : 1 , "sheet2.gi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_unk_acc" : 1 , "sheet2.tot_rur_unk_acc" : 1 , "sheet2.mi_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_rur_unk_acc" : 1 , "sheet2.tot_rur_unk_acc" : 1 , "sheet2.ni_rur_tot_acc" : 1 , "sheet2.tot_rur_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_rur_unk_pep" : 1 , "sheet2.tot_rur_unk_pep" : 1 , "sheet2.kil_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_rur_unk_pep" : 1 , "sheet2.tot_rur_unk_pep" : 1 , "sheet2.gi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_rur_unk_pep" : 1 , "sheet2.tot_rur_unk_pep" : 1 , "sheet2.mi_rur_tot_pep" : 1 , "sheet2.tot_rur_tot_pep" : 1}},function(err , found){
        })
      }
    }
    if(area == 2){
      if(type == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.f_urb_unk_acc" : 1 , "sheet2.tot_urb_unk_acc" : 1 , "sheet2.f_urb_tot_acc"  :1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_unk_acc" : 1 , "sheet2.tot_urb_unk_acc" : 1 , "sheet2.gi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_unk_acc" : 1 , "sheet2.tot_urb_unk_acc" : 1 , "sheet2.mi_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(type == 4){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.ni_urb_unk_acc" : 1 , "sheet2.tot_urb_unk_acc" : 1 , "sheet2.ni_urb_tot_acc" : 1 , "sheet2.tot_urb_tot_acc" : 1}},function(err , found){
        })
      }
      if(people == 1){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.kil_urb_unk_pep" : 1 , "sheet2.tot_urb_unk_pep" : 1 , "sheet2.kil_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 2){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.gi_urb_unk_pep" : 1 , "sheet2.tot_urb_unk_pep" : 1 , "sheet2.gi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
      if(people == 3){
        Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet2.mi_urb_unk_pep" : 1 , "sheet2.tot_urb_unk_pep" : 1 , "sheet2.mi_urb_tot_pep" : 1 , "sheet2.tot_urb_tot_pep" : 1}},function(err , found){
        })
      }
    }
  }
  res.send("Data Updated")
})
app.post("/3" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var w = req.body.wea;
  var type = req.body.type;
  var people = req.body.people;
  if(w == 'sun'){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.f_sun_acc" : 1 , "sheet3.tot_sun_acc" : 1 , "sheet3.f_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_sun_acc" : 1 , "sheet3.tot_sun_acc" : 1 , "sheet3.gi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_sun_acc" : 1 , "sheet3.tot_sun_acc" : 1 , "sheet3.mi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.ni_sun_acc" : 1 , "sheet3.tot_sun_acc" : 1 , "sheet3.ni_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.kil_sun_pep" : 1 , "sheet3.tot_sun_pep" : 1 , "sheet3.kil_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_sun_pep" : 1 , "sheet3.tot_sun_pep" : 1 , "sheet3.gi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_sun_pep" : 1 , "sheet3.tot_sun_pep" : 1 , "sheet3.mi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(w == 'rain'){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.f_rain_acc" : 1 , "sheet3.tot_rain_acc" : 1 , "sheet3.f_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_rain_acc" : 1 , "sheet3.tot_rain_acc" : 1 , "sheet3.gi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_rain_acc" : 1 , "sheet3.tot_rain_acc" : 1 , "sheet3.mi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.ni_rain_acc" : 1 , "sheet3.tot_rain_acc" : 1 , "sheet3.ni_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.kil_rain_pep" : 1 , "sheet3.tot_rain_pep" : 1 , "sheet3.kil_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_rain_pep" : 1 , "sheet3.tot_rain_pep" : 1 , "sheet3.gi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_rain_pep" : 1 , "sheet3.tot_rain_pep" : 1 , "sheet3.mi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(w == 'fog'){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.f_fog_acc" : 1 , "sheet3.tot_fog_acc" : 1 , "sheet3.f_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_fog_acc" : 1 , "sheet3.tot_fog_acc" : 1 , "sheet3.gi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_fog_acc" : 1 , "sheet3.tot_fog_acc" : 1 , "sheet3.mi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.ni_fog_acc" : 1 , "sheet3.tot_fog_acc" : 1 , "sheet3.ni_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.kil_fog_pep" : 1 , "sheet3.tot_fog_pep" : 1 , "sheet3.kil_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_fog_pep" : 1 , "sheet3.tot_fog_pep" : 1 , "sheet3.gi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_fog_pep" : 1 , "sheet3.tot_fog_pep" : 1 , "sheet3.mi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(w == 'hail'){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.f_hail_acc" : 1 , "sheet3.tot_hail_acc" : 1 , "sheet3.f_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_hail_acc" : 1 , "sheet3.tot_hail_acc" : 1 , "sheet3.gi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_hail_acc" : 1 , "sheet3.tot_hail_acc" : 1 , "sheet3.mi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.ni_hail_acc" : 1 , "sheet3.tot_hail_acc" : 1 , "sheet3.ni_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.kil_hail_pep" : 1 , "sheet3.tot_hail_pep" : 1 , "sheet3.kil_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_hail_pep" : 1 , "sheet3.tot_hail_pep" : 1 , "sheet3.gi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_hail_pep" : 1 , "sheet3.tot_hail_pep" : 1 , "sheet3.mi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(w == 'oth'){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.f_oth_acc" : 1 , "sheet3.tot_oth_acc" : 1 , "sheet3.f_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_oth_acc" : 1 , "sheet3.tot_oth_acc" : 1 , "sheet3.gi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_oth_acc" : 1 , "sheet3.tot_oth_acc" : 1 , "sheet3.mi_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.ni_oth_acc" : 1 , "sheet3.tot_oth_acc" : 1 , "sheet3.ni_tot_acc"  :1 , "sheet3.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.kil_oth_pep" : 1 , "sheet3.tot_oth_pep" : 1 , "sheet3.kil_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.gi_oth_pep" : 1 , "sheet3.tot_oth_pep" : 1 , "sheet3.gi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet3.mi_oth_pep" : 1 , "sheet3.tot_oth_pep" : 1 , "sheet3.mi_tot_pep"  :1 , "sheet3.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  res.send("Data updated")
});
app.post("/4" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.road;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "ex"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.f_exp_acc" : 1 , "sheet4.tot_exp_acc" : 1 , "sheet4.f_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.gi_exp_acc" : 1 , "sheet4.tot_exp_acc" : 1 , "sheet4.gi_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.mi_exp_acc" : 1 , "sheet4.tot_exp_acc" : 1 , "sheet4.mi_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.ni_exp_acc" : 1 , "sheet4.tot_exp_acc" : 1 , "sheet4.ni_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.k_exp_pep" : 1 , "sheet4.tot_exp_pep" : 1 , "sheet4.k_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.gi_exp_pep" : 1 , "sheet4.tot_exp_pep" : 1 , "sheet4.gi_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.mi_exp_pep" : 1 , "sheet4.tot_exp_pep" : 1 , "sheet4.mi_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "nh"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.f_nh_acc" : 1 , "sheet4.tot_nh_acc" : 1 , "sheet4.f_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.gi_nh_acc" : 1 , "sheet4.tot_nh_acc" : 1 , "sheet4.gi_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.mi_nh_acc" : 1 , "sheet4.tot_nh_acc" : 1 , "sheet4.mi_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.ni_nh_acc" : 1 , "sheet4.tot_nh_acc" : 1 , "sheet4.ni_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.k_nh_pep" : 1 , "sheet4.tot_nh_pep" : 1 , "sheet4.k_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.gi_nh_pep" : 1 , "sheet4.tot_nh_pep" : 1 , "sheet4.gi_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.mi_nh_pep" : 1 , "sheet4.tot_nh_pep" : 1 , "sheet4.mi_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "sh"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.f_sh_acc" : 1 , "sheet4.tot_sh_acc" : 1 , "sheet4.f_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.gi_sh_acc" : 1 , "sheet4.tot_sh_acc" : 1 , "sheet4.gi_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.mi_sh_acc" : 1 , "sheet4.tot_sh_acc" : 1 , "sheet4.mi_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.ni_sh_acc" : 1 , "sheet4.tot_sh_acc" : 1 , "sheet4.ni_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.k_sh_pep" : 1 , "sheet4.tot_sh_pep" : 1 , "sheet4.k_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.gi_sh_pep" : 1 , "sheet4.tot_sh_pep" : 1 , "sheet4.gi_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.mi_sh_pep" : 1 , "sheet4.tot_sh_pep" : 1 , "sheet4.mi_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "or"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.f_or_acc" : 1 , "sheet4.tot_or_acc" : 1 , "sheet4.f_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.gi_or_acc" : 1 , "sheet4.tot_or_acc" : 1 , "sheet4.gi_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.mi_or_acc" : 1 , "sheet4.tot_or_acc" : 1 , "sheet4.mi_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.ni_or_acc" : 1 , "sheet4.tot_or_acc" : 1 , "sheet4.ni_tot_acc"  :1 , "sheet4.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.k_or_pep" : 1 , "sheet4.tot_or_pep" : 1 , "sheet4.k_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.gi_or_pep" : 1 , "sheet4.tot_or_pep" : 1 , "sheet4.gi_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet4.mi_or_pep" : 1 , "sheet4.tot_or_pep" : 1 , "sheet4.mi_tot_pep"  :1 , "sheet4.tot_tot_pep" : 1}},function(err , found){
      })
    }}
  res.send("Data updated")
});
app.post("/5" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.area;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "RA"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.f_ra_acc" : 1 , "sheet5.tot_ra_acc" : 1 , "sheet5.f_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_ra_acc" : 1 , "sheet5.tot_ra_acc" : 1 , "sheet5.gi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_ra_acc" : 1 , "sheet5.tot_ra_acc" : 1 , "sheet5.mi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.ni_ra_acc" : 1 , "sheet5.tot_ra_acc" : 1 , "sheet5.ni_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.k_ra_pep" : 1 , "sheet5.tot_ra_pep" : 1 , "sheet5.k_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_ra_pep" : 1 , "sheet5.tot_ra_pep" : 1 , "sheet5.gi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_ra_pep" : 1 , "sheet5.tot_ra_pep" : 1 , "sheet5.mi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "IA"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.f_ia_acc" : 1 , "sheet5.tot_ia_acc" : 1 , "sheet5.f_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_ia_acc" : 1 , "sheet5.tot_ia_acc" : 1 , "sheet5.gi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_ia_acc" : 1 , "sheet5.tot_ia_acc" : 1 , "sheet5.mi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.ni_ia_acc" : 1 , "sheet5.tot_ia_acc" : 1 , "sheet5.ni_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.k_ia_pep" : 1 , "sheet5.tot_ia_pep" : 1 , "sheet5.k_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_ia_pep" : 1 , "sheet5.tot_ia_pep" : 1 , "sheet5.gi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_ia_pep" : 1 , "sheet5.tot_ia_pep" : 1 , "sheet5.mi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "market"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.f_ca_acc" : 1 , "sheet5.tot_ca_acc" : 1 , "sheet5.f_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_ca_acc" : 1 , "sheet5.tot_ca_acc" : 1 , "sheet5.gi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_ca_acc" : 1 , "sheet5.tot_ca_acc" : 1 , "sheet5.mi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.ni_ca_acc" : 1 , "sheet5.tot_ca_acc" : 1 , "sheet5.ni_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.k_ca_pep" : 1 , "sheet5.tot_ca_pep" : 1 , "sheet5.k_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_ca_pep" : 1 , "sheet5.tot_ca_pep" : 1 , "sheet5.gi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_ca_pep" : 1 , "sheet5.tot_ca_pep" : 1 , "sheet5.mi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "OA"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.f_oa_acc" : 1 , "sheet5.tot_oa_acc" : 1 , "sheet5.f_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_oa_acc" : 1 , "sheet5.tot_oa_acc" : 1 , "sheet5.gi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_oa_acc" : 1 , "sheet5.tot_oa_acc" : 1 , "sheet5.mi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.ni_oa_acc" : 1 , "sheet5.tot_oa_acc" : 1 , "sheet5.ni_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.k_oa_pep" : 1 , "sheet5.tot_oa_pep" : 1 , "sheet5.k_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_oa_pep" : 1 , "sheet5.tot_oa_pep" : 1 , "sheet5.gi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_oa_pep" : 1 , "sheet5.tot_oa_pep" : 1 , "sheet5.mi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "other"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.f_oth_acc" : 1 , "sheet5.tot_oth_acc" : 1 , "sheet5.f_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_oth_acc" : 1 , "sheet5.tot_oth_acc" : 1 , "sheet5.gi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_oth_acc" : 1 , "sheet5.tot_oth_acc" : 1 , "sheet5.mi_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.ni_oth_acc" : 1 , "sheet5.tot_oth_acc" : 1 , "sheet5.ni_tot_acc"  :1 , "sheet5.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.k_oth_pep" : 1 , "sheet5.tot_oth_pep" : 1 , "sheet5.k_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.gi_oth_pep" : 1 , "sheet5.tot_oth_pep" : 1 , "sheet5.gi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet5.mi_oth_pep" : 1 , "sheet5.tot_oth_pep" : 1 , "sheet5.mi_tot_pep"  :1 , "sheet5.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  res.send("Data updated")
});
app.post("/6" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.troad;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "SR"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.f_sr_acc" : 1 , "sheet6.tot_sr_acc" : 1 , "sheet6.f_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_sr_acc" : 1 , "sheet6.tot_sr_acc" : 1 , "sheet6.gi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_sr_acc" : 1 , "sheet6.tot_sr_acc" : 1 , "sheet6.mi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.ni_sr_acc" : 1 , "sheet6.tot_sr_acc" : 1 , "sheet6.ni_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.k_sr_pep" : 1 , "sheet6.tot_sr_pep" : 1 , "sheet6.k_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_sr_pep" : 1 , "sheet6.tot_sr_pep" : 1 , "sheet6.gi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_sr_pep" : 1 , "sheet6.tot_sr_pep" : 1 , "sheet6.mi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "CR"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.f_cr_acc" : 1 , "sheet6.tot_cr_acc" : 1 , "sheet6.f_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_cr_acc" : 1 , "sheet6.tot_cr_acc" : 1 , "sheet6.gi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_cr_acc" : 1 , "sheet6.tot_cr_acc" : 1 , "sheet6.mi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.ni_cr_acc" : 1 , "sheet6.tot_cr_acc" : 1 , "sheet6.ni_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.k_cr_pep" : 1 , "sheet6.tot_cr_pep" : 1 , "sheet6.k_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_cr_pep" : 1 , "sheet6.tot_cr_pep" : 1 , "sheet6.gi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_cr_pep" : 1 , "sheet6.tot_cr_pep" : 1 , "sheet6.mi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "BR"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.f_brid_acc" : 1 , "sheet6.tot_brid_acc" : 1 , "sheet6.f_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_brid_acc" : 1 , "sheet6.tot_brid_acc" : 1 , "sheet6.gi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_brid_acc" : 1 , "sheet6.tot_brid_acc" : 1 , "sheet6.mi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.ni_brid_acc" : 1 , "sheet6.tot_brid_acc" : 1 , "sheet6.ni_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.k_brid_pep" : 1 , "sheet6.tot_brid_pep" : 1 , "sheet6.k_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_brid_pep" : 1 , "sheet6.tot_brid_pep" : 1 , "sheet6.gi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_brid_pep" : 1 , "sheet6.tot_brid_pep" : 1 , "sheet6.mi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "culvert"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.f_culv_acc" : 1 , "sheet6.tot_culv_acc" : 1 , "sheet6.f_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_culv_acc" : 1 , "sheet6.tot_culv_acc" : 1 , "sheet6.gi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_culv_acc" : 1 , "sheet6.tot_culv_acc" : 1 , "sheet6.mi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.ni_culv_acc" : 1 , "sheet6.tot_culv_acc" : 1 , "sheet6.ni_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.k_culv_pep" : 1 , "sheet6.tot_culv_pep" : 1 , "sheet6.k_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_culv_pep" : 1 , "sheet6.tot_culv_pep" : 1 , "sheet6.gi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_culv_pep" : 1 , "sheet6.tot_culv_pep" : 1 , "sheet6.mi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "PH"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.f_poth_acc" : 1 , "sheet6.tot_poth_acc" : 1 , "sheet6.f_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_poth_acc" : 1 , "sheet6.tot_poth_acc" : 1 , "sheet6.gi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_poth_acc" : 1 , "sheet6.tot_poth_acc" : 1 , "sheet6.mi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.ni_poth_acc" : 1 , "sheet6.tot_poth_acc" : 1 , "sheet6.ni_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.k_poth_pep" : 1 , "sheet6.tot_poth_pep" : 1 , "sheet6.k_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_poth_pep" : 1 , "sheet6.tot_poth_pep" : 1 , "sheet6.gi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_poth_pep" : 1 , "sheet6.tot_poth_pep" : 1 , "sheet6.mi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "SG"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.f_steepg_acc" : 1 , "sheet6.tot_steepg_acc" : 1 , "sheet6.f_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_steepg_acc" : 1 , "sheet6.tot_steepg_acc" : 1 , "sheet6.gi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_steepg_acc" : 1 , "sheet6.tot_steepg_acc" : 1 , "sheet6.mi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.ni_steepg_acc" : 1 , "sheet6.tot_steepg_acc" : 1 , "sheet6.ni_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.k_steepg_pep" : 1 , "sheet6.tot_steepg_pep" : 1 , "sheet6.k_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_steepg_pep" : 1 , "sheet6.tot_steepg_pep" : 1 , "sheet6.gi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_steepg_pep" : 1 , "sheet6.tot_steepg_pep" : 1 , "sheet6.mi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "RUC"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.f_underc_acc" : 1 , "sheet6.tot_underc_acc" : 1 , "sheet6.f_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_underc_acc" : 1 , "sheet6.tot_underc_acc" : 1 , "sheet6.gi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_underc_acc" : 1 , "sheet6.tot_underc_acc" : 1 , "sheet6.mi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.ni_underc_acc" : 1 , "sheet6.tot_underc_acc" : 1 , "sheet6.ni_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.k_underc_pep" : 1 , "sheet6.tot_underc_pep" : 1 , "sheet6.k_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_underc_pep" : 1 , "sheet6.tot_underc_pep" : 1 , "sheet6.gi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_underc_pep" : 1 , "sheet6.tot_underc_pep" : 1 , "sheet6.mi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "others"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.f_others_acc" : 1 , "sheet6.tot_others_acc" : 1 , "sheet6.f_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_others_acc" : 1 , "sheet6.tot_others_acc" : 1 , "sheet6.gi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_others_acc" : 1 , "sheet6.tot_others_acc" : 1 , "sheet6.mi_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.ni_others_acc" : 1 , "sheet6.tot_others_acc" : 1 , "sheet6.ni_tot_acc"  :1 , "sheet6.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.k_others_pep" : 1 , "sheet6.tot_others_pep" : 1 , "sheet6.k_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.gi_others_pep" : 1 , "sheet6.tot_others_pep" : 1 , "sheet6.gi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet6.mi_others_pep" : 1 , "sheet6.tot_others_pep" : 1 , "sheet6.mi_tot_pep"  :1 , "sheet6.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  res.send("Data updated")
});
app.post("/7" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.junction;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "T"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.f_tjn_acc" : 1 , "sheet7.tot_tjn_acc" : 1 , "sheet7.f_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_tjn_acc" : 1 , "sheet7.tot_tjn_acc" : 1 , "sheet7.gi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_tjn_acc" : 1 , "sheet7.tot_tjn_acc" : 1 , "sheet7.mi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.ni_tjn_acc" : 1 , "sheet7.tot_tjn_acc" : 1 , "sheet7.ni_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.k_tjn_pep" : 1 , "sheet7.tot_tjn_pep" : 1 , "sheet7.k_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_tjn_pep" : 1 , "sheet7.tot_tjn_pep" : 1 , "sheet7.gi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_tjn_pep" : 1 , "sheet7.tot_tjn_pep" : 1 , "sheet7.mi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "Y"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.f_yjn_acc" : 1 , "sheet7.tot_yjn_acc" : 1 , "sheet7.f_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_yjn_acc" : 1 , "sheet7.tot_yjn_acc" : 1 , "sheet7.gi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_yjn_acc" : 1 , "sheet7.tot_yjn_acc" : 1 , "sheet7.mi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.ni_yjn_acc" : 1 , "sheet7.tot_yjn_acc" : 1 , "sheet7.ni_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.k_yjn_pep" : 1 , "sheet7.tot_yjn_pep" : 1 , "sheet7.k_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_yjn_pep" : 1 , "sheet7.tot_yjn_pep" : 1 , "sheet7.gi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_yjn_pep" : 1 , "sheet7.tot_yjn_pep" : 1 , "sheet7.mi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "4arm"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.f_faj_acc" : 1 , "sheet7.tot_faj_acc" : 1 , "sheet7.f_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_faj_acc" : 1 , "sheet7.tot_faj_acc" : 1 , "sheet7.gi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_faj_acc" : 1 , "sheet7.tot_faj_acc" : 1 , "sheet7.mi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.ni_faj_acc" : 1 , "sheet7.tot_faj_acc" : 1 , "sheet7.ni_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.k_faj_pep" : 1 , "sheet7.tot_faj_pep" : 1 , "sheet7.k_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_faj_pep" : 1 , "sheet7.tot_faj_pep" : 1 , "sheet7.gi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_faj_pep" : 1 , "sheet7.tot_faj_pep" : 1 , "sheet7.mi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "SJ"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.f_sj_acc" : 1 , "sheet7.tot_sj_acc" : 1 , "sheet7.f_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_sj_acc" : 1 , "sheet7.tot_sj_acc" : 1 , "sheet7.gi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_sj_acc" : 1 , "sheet7.tot_sj_acc" : 1 , "sheet7.mi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.ni_sj_acc" : 1 , "sheet7.tot_sj_acc" : 1 , "sheet7.ni_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.k_sj_pep" : 1 , "sheet7.tot_sj_pep" : 1 , "sheet7.k_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_sj_pep" : 1 , "sheet7.tot_sj_pep" : 1 , "sheet7.gi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_sj_pep" : 1 , "sheet7.tot_sj_pep" : 1 , "sheet7.mi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "RAJ"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.f_raj_acc" : 1 , "sheet7.tot_raj_acc" : 1 , "sheet7.f_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_raj_acc" : 1 , "sheet7.tot_raj_acc" : 1 , "sheet7.gi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_raj_acc" : 1 , "sheet7.tot_raj_acc" : 1 , "sheet7.mi_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.ni_raj_acc" : 1 , "sheet7.tot_raj_acc" : 1 , "sheet7.ni_tot_acc"  :1 , "sheet7.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.k_raj_pep" : 1 , "sheet7.tot_raj_pep" : 1 , "sheet7.k_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.gi_raj_pep" : 1 , "sheet7.tot_raj_pep" : 1 , "sheet7.gi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet7.mi_raj_pep" : 1 , "sheet7.tot_raj_pep" : 1 , "sheet7.mi_tot_pep"  :1 , "sheet7.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  res.send("Data updated")
});
app.post("/8" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.traffic;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "TL"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.f_tls_acc" : 1 , "sheet8.tot_tls_acc" : 1 , "sheet8.f_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_tls_acc" : 1 , "sheet8.tot_tls_acc" : 1 , "sheet8.gi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_tls_acc" : 1 , "sheet8.tot_tls_acc" : 1 , "sheet8.mi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.ni_tls_acc" : 1 , "sheet8.tot_tls_acc" : 1 , "sheet8.ni_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.k_tls_pep" : 1 , "sheet8.tot_tls_pep" : 1 , "sheet8.k_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_tls_pep" : 1 , "sheet8.tot_tls_pep" : 1 , "sheet8.gi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_tls_pep" : 1 , "sheet8.tot_tls_pep" : 1 , "sheet8.mi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "PC"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.f_pc_acc" : 1 , "sheet8.tot_pc_acc" : 1 , "sheet8.f_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_pc_acc" : 1 , "sheet8.tot_pc_acc" : 1 , "sheet8.gi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_pc_acc" : 1 , "sheet8.tot_pc_acc" : 1 , "sheet8.mi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.ni_pc_acc" : 1 , "sheet8.tot_pc_acc" : 1 , "sheet8.ni_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.k_pc_pep" : 1 , "sheet8.tot_pc_pep" : 1 , "sheet8.k_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_pc_pep" : 1 , "sheet8.tot_pc_pep" : 1 , "sheet8.gi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_pc_pep" : 1 , "sheet8.tot_pc_pep" : 1 , "sheet8.mi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "SS"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.f_ss_acc" : 1 , "sheet8.tot_ss_acc" : 1 , "sheet8.f_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_ss_acc" : 1 , "sheet8.tot_ss_acc" : 1 , "sheet8.gi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_ss_acc" : 1 , "sheet8.tot_ss_acc" : 1 , "sheet8.mi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.ni_ss_acc" : 1 , "sheet8.tot_ss_acc" : 1 , "sheet8.ni_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.k_ss_pep" : 1 , "sheet8.tot_ss_pep" : 1 , "sheet8.k_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_ss_pep" : 1 , "sheet8.tot_ss_pep" : 1 , "sheet8.gi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_ss_pep" : 1 , "sheet8.tot_ss_pep" : 1 , "sheet8.mi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "FS"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.f_fs_acc" : 1 , "sheet8.tot_fs_acc" : 1 , "sheet8.f_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_fs_acc" : 1 , "sheet8.tot_fs_acc" : 1 , "sheet8.gi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_fs_acc" : 1 , "sheet8.tot_fs_acc" : 1 , "sheet8.mi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.ni_fs_acc" : 1 , "sheet8.tot_fs_acc" : 1 , "sheet8.ni_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.k_fs_pep" : 1 , "sheet8.tot_fs_pep" : 1 , "sheet8.k_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_fs_pep" : 1 , "sheet8.tot_fs_pep" : 1 , "sheet8.gi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_fs_pep" : 1 , "sheet8.tot_fs_pep" : 1 , "sheet8.mi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "uncontrolled"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.f_unc_acc" : 1 , "sheet8.tot_unc_acc" : 1 , "sheet8.f_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_unc_acc" : 1 , "sheet8.tot_unc_acc" : 1 , "sheet8.gi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_unc_acc" : 1 , "sheet8.tot_unc_acc" : 1 , "sheet8.mi_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.ni_unc_acc" : 1 , "sheet8.tot_unc_acc" : 1 , "sheet8.ni_tot_acc"  :1 , "sheet8.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.k_unc_pep" : 1 , "sheet8.tot_unc_pep" : 1 , "sheet8.k_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.gi_unc_pep" : 1 , "sheet8.tot_unc_pep" : 1 , "sheet8.gi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet8.mi_unc_pep" : 1 , "sheet8.tot_unc_pep" : 1 , "sheet8.mi_tot_pep"  :1 , "sheet8.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  
  res.send("Data updated")
});
app.post("/9" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.PI;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "ZC"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.f_zc_acc" : 1 , "sheet9.tot_zc_acc" : 1 , "sheet9.f_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.gi_zc_acc" : 1 , "sheet9.tot_zc_acc" : 1 , "sheet9.gi_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.mi_zc_acc" : 1 , "sheet9.tot_zc_acc" : 1 , "sheet9.mi_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.ni_zc_acc" : 1 , "sheet9.tot_zc_acc" : 1 , "sheet9.ni_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.k_zc_pep" : 1 , "sheet9.tot_zc_pep" : 1 , "sheet9.k_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.gi_zc_pep" : 1 , "sheet9.tot_zc_pep" : 1 , "sheet9.gi_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.mi_zc_pep" : 1 , "sheet9.tot_zc_pep" : 1 , "sheet9.mi_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "FB"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.f_fb_acc" : 1 , "sheet9.tot_fb_acc" : 1 , "sheet9.f_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.gi_fb_acc" : 1 , "sheet9.tot_fb_acc" : 1 , "sheet9.gi_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.mi_fb_acc" : 1 , "sheet9.tot_fb_acc" : 1 , "sheet9.mi_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.ni_fb_acc" : 1 , "sheet9.tot_fb_acc" : 1 , "sheet9.ni_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.k_fb_pep" : 1 , "sheet9.tot_fb_pep" : 1 , "sheet9.k_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.gi_fb_pep" : 1 , "sheet9.tot_fb_pep" : 1 , "sheet9.gi_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.mi_fb_pep" : 1 , "sheet9.tot_fb_pep" : 1 , "sheet9.mi_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "footpath"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.f_fp_acc" : 1 , "sheet9.tot_fp_acc" : 1 , "sheet9.f_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.gi_fp_acc" : 1 , "sheet9.tot_fp_acc" : 1 , "sheet9.gi_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.mi_fp_acc" : 1 , "sheet9.tot_fp_acc" : 1 , "sheet9.mi_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.ni_fp_acc" : 1 , "sheet9.tot_fp_acc" : 1 , "sheet9.ni_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.k_fp_pep" : 1 , "sheet9.tot_fp_pep" : 1 , "sheet9.k_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.gi_fp_pep" : 1 , "sheet9.tot_fp_pep" : 1 , "sheet9.gi_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.mi_fp_pep" : 1 , "sheet9.tot_fp_pep" : 1 , "sheet9.mi_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "others"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.f_others_acc" : 1 , "sheet9.tot_others_acc" : 1 , "sheet9.f_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.gi_others_acc" : 1 , "sheet9.tot_others_acc" : 1 , "sheet9.gi_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.mi_others_acc" : 1 , "sheet9.tot_others_acc" : 1 , "sheet9.mi_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.ni_others_acc" : 1 , "sheet9.tot_others_acc" : 1 , "sheet9.ni_tot_acc"  :1 , "sheet9.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.k_others_pep" : 1 , "sheet9.tot_others_pep" : 1 , "sheet9.k_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.gi_others_pep" : 1 , "sheet9.tot_others_pep" : 1 , "sheet9.gi_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet9.mi_others_pep" : 1 , "sheet9.tot_others_pep" : 1 , "sheet9.mi_tot_pep"  :1 , "sheet9.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  res.send("Data updated")
});
app.post("/10" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.vehicle;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "ped"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_ped_acc" : 1 , "sheet10.tot_ped_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_ped_acc" : 1 , "sheet10.tot_ped_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_ped_acc" : 1 , "sheet10.tot_ped_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_ped_acc" : 1 , "sheet10.tot_ped_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_ped_pep" : 1 , "sheet10.tot_ped_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_ped_pep" : 1 , "sheet10.tot_ped_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_ped_pep" : 1 , "sheet10.tot_ped_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "cycle"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_byc_acc" : 1 , "sheet10.tot_byc_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_byc_acc" : 1 , "sheet10.tot_byc_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_byc_acc" : 1 , "sheet10.tot_byc_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_byc_acc" : 1 , "sheet10.tot_byc_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_byc_pep" : 1 , "sheet10.tot_byc_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_byc_pep" : 1 , "sheet10.tot_byc_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_byc_pep" : 1 , "sheet10.tot_byc_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "tw"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_2wh_acc" : 1 , "sheet10.tot_2wh_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_2wh_acc" : 1 , "sheet10.tot_2wh_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_2wh_acc" : 1 , "sheet10.tot_2wh_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_2wh_acc" : 1 , "sheet10.tot_2wh_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_2wh_pep" : 1 , "sheet10.tot_2wh_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_2wh_pep" : 1 , "sheet10.tot_2wh_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_2wh_pep" : 1 , "sheet10.tot_2wh_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "ar"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_arick_acc" : 1 , "sheet10.tot_arick_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_arick_acc" : 1 , "sheet10.tot_arick_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_arick_acc" : 1 , "sheet10.tot_arick_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_arick_acc" : 1 , "sheet10.tot_arick_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_arick_pep" : 1 , "sheet10.tot_arick_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_arick_pep" : 1 , "sheet10.tot_arick_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_arick_pep" : 1 , "sheet10.tot_arick_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "c"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_4wh_acc" : 1 , "sheet10.tot_4wh_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_4wh_acc" : 1 , "sheet10.tot_4wh_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_4wh_acc" : 1 , "sheet10.tot_4wh_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_4wh_acc" : 1 , "sheet10.tot_4wh_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_4wh_pep" : 1 , "sheet10.tot_4wh_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_4wh_pep" : 1 , "sheet10.tot_4wh_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_4wh_pep" : 1 , "sheet10.tot_4wh_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "t"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_truck_acc" : 1 , "sheet10.tot_truck_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_truck_acc" : 1 , "sheet10.tot_truck_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_truck_acc" : 1 , "sheet10.tot_truck_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_truck_acc" : 1 , "sheet10.tot_truck_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_truck_pep" : 1 , "sheet10.tot_truck_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_truck_pep" : 1 , "sheet10.tot_truck_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_truck_pep" : 1 , "sheet10.tot_truck_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "b"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_bus_acc" : 1 , "sheet10.tot_bus_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_bus_acc" : 1 , "sheet10.tot_bus_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_bus_acc" : 1 , "sheet10.tot_bus_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_bus_acc" : 1 , "sheet10.tot_bus_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_bus_pep" : 1 , "sheet10.tot_bus_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_bus_pep" : 1 , "sheet10.tot_bus_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_bus_pep" : 1 , "sheet10.tot_bus_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "omv"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_omv_acc" : 1 , "sheet10.tot_omv_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_omv_acc" : 1 , "sheet10.tot_omv_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_omv_acc" : 1 , "sheet10.tot_omv_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_omv_acc" : 1 , "sheet10.tot_omv_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_omv_pep" : 1 , "sheet10.tot_omv_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_omv_pep" : 1 , "sheet10.tot_omv_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_omv_pep" : 1 , "sheet10.tot_omv_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "er"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_er_acc" : 1 , "sheet10.tot_er_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_er_acc" : 1 , "sheet10.tot_er_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_er_acc" : 1 , "sheet10.tot_er_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_er_acc" : 1 , "sheet10.tot_er_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_er_pep" : 1 , "sheet10.tot_er_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_er_pep" : 1 , "sheet10.tot_er_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_er_pep" : 1 , "sheet10.tot_er_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "nmv"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_nmv_acc" : 1 , "sheet10.tot_nmv_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_nmv_acc" : 1 , "sheet10.tot_nmv_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_nmv_acc" : 1 , "sheet10.tot_nmv_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_nmv_acc" : 1 , "sheet10.tot_nmv_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_nmv_pep" : 1 , "sheet10.tot_nmv_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_nmv_pep" : 1 , "sheet10.tot_nmv_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_nmv_pep" : 1 , "sheet10.tot_nmv_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  if(r == "other"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.f_other_acc" : 1 , "sheet10.tot_other_acc" : 1 , "sheet10.f_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_other_acc" : 1 , "sheet10.tot_other_acc" : 1 , "sheet10.gi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_other_acc" : 1 , "sheet10.tot_other_acc" : 1 , "sheet10.mi_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.ni_other_acc" : 1 , "sheet10.tot_other_acc" : 1 , "sheet10.ni_tot_acc"  :1 , "sheet10.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.k_other_pep" : 1 , "sheet10.tot_other_pep" : 1 , "sheet10.k_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.gi_other_pep" : 1 , "sheet10.tot_other_pep" : 1 , "sheet10.gi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet10.mi_other_pep" : 1 , "sheet10.tot_other_pep" : 1 , "sheet10.mi_tot_pep"  :1 , "sheet10.tot_tot_pep" : 1}},function(err , found){
      })
    }
  }
  res.send("Data updated")
});
app.post("/11" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.vehicleAge;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "5"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.f_5_acc" : 1 , "sheet11.tot_5_acc" : 1 , "sheet11.f_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_5_acc" : 1 , "sheet11.tot_5_acc" : 1 , "sheet11.gi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_5_acc" : 1 , "sheet11.tot_5_acc" : 1 , "sheet11.mi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.ni_5_acc" : 1 , "sheet11.tot_5_acc" : 1 , "sheet11.ni_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.k_5_pep" : 1 , "sheet11.tot_5_pep" : 1 , "sheet11.k_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_5_pep" : 1 , "sheet11.tot_5_pep" : 1 , "sheet11.gi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_5_pep" : 1 , "sheet11.tot_5_pep" : 1 , "sheet11.mi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "510"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.f_510_acc" : 1 , "sheet11.tot_510_acc" : 1 , "sheet11.f_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_510_acc" : 1 , "sheet11.tot_510_acc" : 1 , "sheet11.gi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_510_acc" : 1 , "sheet11.tot_510_acc" : 1 , "sheet11.mi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.ni_510_acc" : 1 , "sheet11.tot_510_acc" : 1 , "sheet11.ni_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.k_510_pep" : 1 , "sheet11.tot_510_pep" : 1 , "sheet11.k_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_510_pep" : 1 , "sheet11.tot_510_pep" : 1 , "sheet11.gi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_510_pep" : 1 , "sheet11.tot_510_pep" : 1 , "sheet11.mi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "1015"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.f_1015_acc" : 1 , "sheet11.tot_1015_acc" : 1 , "sheet11.f_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_1015_acc" : 1 , "sheet11.tot_1015_acc" : 1 , "sheet11.gi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_1015_acc" : 1 , "sheet11.tot_1015_acc" : 1 , "sheet11.mi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.ni_1015_acc" : 1 , "sheet11.tot_1015_acc" : 1 , "sheet11.ni_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.k_1015_pep" : 1 , "sheet11.tot_1015_pep" : 1 , "sheet11.k_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_1015_pep" : 1 , "sheet11.tot_1015_pep" : 1 , "sheet11.gi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_1015_pep" : 1 , "sheet11.tot_1015_pep" : 1 , "sheet11.mi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "15"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.f_15_acc" : 1 , "sheet11.tot_15_acc" : 1 , "sheet11.f_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_15_acc" : 1 , "sheet11.tot_15_acc" : 1 , "sheet11.gi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_15_acc" : 1 , "sheet11.tot_15_acc" : 1 , "sheet11.mi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.ni_15_acc" : 1 , "sheet11.tot_15_acc" : 1 , "sheet11.ni_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.k_15_pep" : 1 , "sheet11.tot_15_pep" : 1 , "sheet11.k_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_15_pep" : 1 , "sheet11.tot_15_pep" : 1 , "sheet11.gi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_15_pep" : 1 , "sheet11.tot_15_pep" : 1 , "sheet11.mi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "notknown"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.f_unk_acc" : 1 , "sheet11.tot_unk_acc" : 1 , "sheet11.f_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_unk_acc" : 1 , "sheet11.tot_unk_acc" : 1 , "sheet11.gi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_unk_acc" : 1 , "sheet11.tot_unk_acc" : 1 , "sheet11.mi_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.ni_unk_acc" : 1 , "sheet11.tot_unk_acc" : 1 , "sheet11.ni_tot_acc"  :1 , "sheet11.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.k_unk_pep" : 1 , "sheet11.tot_unk_pep" : 1 , "sheet11.k_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.gi_unk_pep" : 1 , "sheet11.tot_unk_pep" : 1 , "sheet11.gi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet11.mi_unk_pep" : 1 , "sheet11.tot_unk_pep" : 1 , "sheet11.mi_tot_pep"  :1 , "sheet11.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }

  res.send("Data Updated");
})
app.post("/12" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.load;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "NL"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.f_nl_acc" : 1 , "sheet12.tot_nl_acc" : 1 , "sheet12.f_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.gi_nl_acc" : 1 , "sheet12.tot_nl_acc" : 1 , "sheet12.gi_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.mi_nl_acc" : 1 , "sheet12.tot_nl_acc" : 1 , "sheet12.mi_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.ni_nl_acc" : 1 , "sheet12.tot_nl_acc" : 1 , "sheet12.ni_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.k_nl_pep" : 1 , "sheet12.tot_nl_pep" : 1 , "sheet12.k_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.gi_nl_pep" : 1 , "sheet12.tot_nl_pep" : 1 , "sheet12.gi_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.mi_nl_pep" : 1 , "sheet12.tot_nl_pep" : 1 , "sheet12.mi_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "OL"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.f_ol_acc" : 1 , "sheet12.tot_ol_acc" : 1 , "sheet12.f_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.gi_ol_acc" : 1 , "sheet12.tot_ol_acc" : 1 , "sheet12.gi_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.mi_ol_acc" : 1 , "sheet12.tot_ol_acc" : 1 , "sheet12.mi_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.ni_ol_acc" : 1 , "sheet12.tot_ol_acc" : 1 , "sheet12.ni_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.k_ol_pep" : 1 , "sheet12.tot_ol_pep" : 1 , "sheet12.k_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.gi_ol_pep" : 1 , "sheet12.tot_ol_pep" : 1 , "sheet12.gi_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.mi_ol_pep" : 1 , "sheet12.tot_ol_pep" : 1 , "sheet12.mi_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "empty"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.f_emp_acc" : 1 , "sheet12.tot_emp_acc" : 1 , "sheet12.f_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.gi_emp_acc" : 1 , "sheet12.tot_emp_acc" : 1 , "sheet12.gi_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.mi_emp_acc" : 1 , "sheet12.tot_emp_acc" : 1 , "sheet12.mi_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.ni_emp_acc" : 1 , "sheet12.tot_emp_acc" : 1 , "sheet12.ni_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.k_emp_pep" : 1 , "sheet12.tot_emp_pep" : 1 , "sheet12.k_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.gi_emp_pep" : 1 , "sheet12.tot_emp_pep" : 1 , "sheet12.gi_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.mi_emp_pep" : 1 , "sheet12.tot_emp_pep" : 1 , "sheet12.mi_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "notknown"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.f_notk_acc" : 1 , "sheet12.tot_notk_acc" : 1 , "sheet12.f_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.gi_notk_acc" : 1 , "sheet12.tot_notk_acc" : 1 , "sheet12.gi_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.mi_notk_acc" : 1 , "sheet12.tot_notk_acc" : 1 , "sheet12.mi_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.ni_notk_acc" : 1 , "sheet12.tot_notk_acc" : 1 , "sheet12.ni_tot_acc"  :1 , "sheet12.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.k_notk_pep" : 1 , "sheet12.tot_notk_pep" : 1 , "sheet12.k_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.gi_notk_pep" : 1 , "sheet12.tot_notk_pep" : 1 , "sheet12.gi_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet12.mi_notk_pep" : 1 , "sheet12.tot_notk_pep" : 1 , "sheet12.mi_tot_pep"  :1 , "sheet12.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }

  res.send("Data Updated");
})
app.post("/13" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.vv;
  var s = req.body.typec;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "v2v"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_v2v_acc" : 1 , "sheet13.tot_v2v_acc" : 1 , "sheet13.f_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_v2v_acc" : 1 , "sheet13.tot_v2v_acc" : 1 , "sheet13.gi_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_v2v_acc" : 1 , "sheet13.tot_v2v_acc" : 1 , "sheet13.mi_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_v2v_acc" : 1 , "sheet13.tot_v2v_acc" : 1 , "sheet13.ni_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_v2v_pep" : 1 , "sheet13.tot_v2v_pep" : 1 , "sheet13.k_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_v2v_pep" : 1 , "sheet13.tot_v2v_pep" : 1 , "sheet13.gi_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_v2v_pep" : 1 , "sheet13.tot_v2v_pep" : 1 , "sheet13.mi_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "v2p"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_v2p_acc" : 1 , "sheet13.tot_v2p_acc" : 1 , "sheet13.f_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_v2p_acc" : 1 , "sheet13.tot_v2p_acc" : 1 , "sheet13.gi_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_v2p_acc" : 1 , "sheet13.tot_v2p_acc" : 1 , "sheet13.mi_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_v2p_acc" : 1 , "sheet13.tot_v2p_acc" : 1 , "sheet13.ni_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_v2p_pep" : 1 , "sheet13.tot_v2p_pep" : 1 , "sheet13.k_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_v2p_pep" : 1 , "sheet13.tot_v2p_pep" : 1 , "sheet13.gi_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_v2p_pep" : 1 , "sheet13.tot_v2p_pep" : 1 , "sheet13.mi_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "v2nm"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_v2nmv_acc" : 1 , "sheet13.tot_v2nmv_acc" : 1 , "sheet13.f_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_v2nmv_acc" : 1 , "sheet13.tot_v2nmv_acc" : 1 , "sheet13.gi_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_v2nmv_acc" : 1 , "sheet13.tot_v2nmv_acc" : 1 , "sheet13.mi_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_v2nmv_acc" : 1 , "sheet13.tot_v2nmv_acc" : 1 , "sheet13.ni_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_v2nmv_pep" : 1 , "sheet13.tot_v2nmv_pep" : 1 , "sheet13.k_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_v2nmv_pep" : 1 , "sheet13.tot_v2nmv_pep" : 1 , "sheet13.gi_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_v2nmv_pep" : 1 , "sheet13.tot_v2nmv_pep" : 1 , "sheet13.mi_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(r == "v2a"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_v2a_acc" : 1 , "sheet13.tot_v2a_acc" : 1 , "sheet13.f_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_v2a_acc" : 1 , "sheet13.tot_v2a_acc" : 1 , "sheet13.gi_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_v2a_acc" : 1 , "sheet13.tot_v2a_acc" : 1 , "sheet13.mi_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_v2a_acc" : 1 , "sheet13.tot_v2a_acc" : 1 , "sheet13.ni_tot_acc"  :1 , "sheet13.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_v2a_pep" : 1 , "sheet13.tot_v2a_pep" : 1 , "sheet13.k_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_v2a_pep" : 1 , "sheet13.tot_v2a_pep" : 1 , "sheet13.gi_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_v2a_pep" : 1 , "sheet13.tot_v2a_pep" : 1 , "sheet13.mi_tot_pep"  :1 , "sheet13.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "hnr"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_hitnrun_acc" : 1 , "sheet13.tot_hitnrun_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitnrun_acc" : 1 , "sheet13.tot_hitnrun_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitnrun_acc" : 1 , "sheet13.tot_hitnrun_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_hitnrun_acc" : 1 , "sheet13.tot_hitnrun_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_hitnrun_pep" : 1 , "sheet13.tot_hitnrun_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitnrun_pep" : 1 , "sheet13.tot_hitnrun_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitnrun_pep" : 1 , "sheet13.tot_hitnrun_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "hwpv"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_hitwpv_acc" : 1 , "sheet13.tot_hitwpv_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitwpv_acc" : 1 , "sheet13.tot_hitwpv_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitwpv_acc" : 1 , "sheet13.tot_hitwpv_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_hitwpv_acc" : 1 , "sheet13.tot_hitwpv_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_hitwpv_pep" : 1 , "sheet13.tot_hitwpv_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitwpv_pep" : 1 , "sheet13.tot_hitwpv_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitwpv_pep" : 1 , "sheet13.tot_hitwpv_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "hfb"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_hitfback_acc" : 1 , "sheet13.tot_hitfback_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitfback_acc" : 1 , "sheet13.tot_hitfback_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitfback_acc" : 1 , "sheet13.tot_hitfback_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_hitfback_acc" : 1 , "sheet13.tot_hitfback_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_hitfback_pep" : 1 , "sheet13.tot_hitfback_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitfback_pep" : 1 , "sheet13.tot_hitfback_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitfback_pep" : 1 , "sheet13.tot_hitfback_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "hfs"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_hitfside_acc" : 1 , "sheet13.tot_hitfside_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitfside_acc" : 1 , "sheet13.tot_hitfside_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitfside_acc" : 1 , "sheet13.tot_hitfside_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_hitfside_acc" : 1 , "sheet13.tot_hitfside_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_hitfside_pep" : 1 , "sheet13.tot_hitfside_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitfside_pep" : 1 , "sheet13.tot_hitfside_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitfside_pep" : 1 , "sheet13.tot_hitfside_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "ror"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_runoffroad_acc" : 1 , "sheet13.tot_runoffroad_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_runoffroad_acc" : 1 , "sheet13.tot_runoffroad_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_runoffroad_acc" : 1 , "sheet13.tot_runoffroad_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_runoffroad_acc" : 1 , "sheet13.tot_runoffroad_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_runoffroad_pep" : 1 , "sheet13.tot_runoffroad_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_runoffroad_pep" : 1 , "sheet13.tot_runoffroad_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_runoffroad_pep" : 1 , "sheet13.tot_runoffroad_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "hwfo"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_hitwfo_acc" : 1 , "sheet13.tot_hitwfo_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitwfo_acc" : 1 , "sheet13.tot_hitwfo_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitwfo_acc" : 1 , "sheet13.tot_hitwfo_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_hitwfo_acc" : 1 , "sheet13.tot_hitwfo_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_hitwfo_pep" : 1 , "sheet13.tot_hitwfo_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hitwfo_pep" : 1 , "sheet13.tot_hitwfo_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hitwfo_pep" : 1 , "sheet13.tot_hitwfo_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "vo"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_vo_acc" : 1 , "sheet13.tot_vo_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_vo_acc" : 1 , "sheet13.tot_vo_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_vo_acc" : 1 , "sheet13.tot_vo_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_vo_acc" : 1 , "sheet13.tot_vo_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_vo_pep" : 1 , "sheet13.tot_vo_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_vo_pep" : 1 , "sheet13.tot_vo_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_vo_pep" : 1 , "sheet13.tot_vo_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "hoc"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_hoc_acc" : 1 , "sheet13.tot_hoc_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hoc_acc" : 1 , "sheet13.tot_hoc_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hoc_acc" : 1 , "sheet13.tot_hoc_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_hoc_acc" : 1 , "sheet13.tot_hoc_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_hoc_pep" : 1 , "sheet13.tot_hoc_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_hoc_pep" : 1 , "sheet13.tot_hoc_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_hoc_pep" : 1 , "sheet13.tot_hoc_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }
  if(s == "others"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.f_others_acc" : 1 , "sheet13.tot_others_acc" : 1 , "sheet13.f_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_others_acc" : 1 , "sheet13.tot_others_acc" : 1 , "sheet13.gi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_others_acc" : 1 , "sheet13.tot_others_acc" : 1 , "sheet13.mi_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.ni_others_acc" : 1 , "sheet13.tot_others_acc" : 1 , "sheet13.ni_tot2_acc"  :1 , "sheet13.tot_tot2_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.k_others_pep" : 1 , "sheet13.tot_others_pep" : 1 , "sheet13.k_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.gi_others_pep" : 1 , "sheet13.tot_others_pep" : 1 , "sheet13.gi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet13.mi_others_pep" : 1 , "sheet13.tot_others_pep" : 1 , "sheet13.mi_tot2_pep"  :1 , "sheet13.tot_tot2_pep" : 1}},function(err , found){
      })
    } 
  }

  res.send("Data Updated");
})
app.post("/14" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.violation;
  var type = req.body.type;
  var people = req.body.people;
  if(r == "OS"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.f_os_acc" : 1 , "sheet14.tot_os_acc" : 1 , "sheet14.f_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_os_acc" : 1 , "sheet14.tot_os_acc" : 1 , "sheet14.gi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_os_acc" : 1 , "sheet14.tot_os_acc" : 1 , "sheet14.mi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.ni_os_acc" : 1 , "sheet14.tot_os_acc" : 1 , "sheet14.ni_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.k_os_pep" : 1 , "sheet14.tot_os_pep" : 1 , "sheet14.k_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_os_pep" : 1 , "sheet14.tot_os_pep" : 1 , "sheet14.gi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_os_pep" : 1 , "sheet14.tot_os_pep" : 1 , "sheet14.mi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }

  if(r == "DD"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.f_dd_acc" : 1 , "sheet14.tot_dd_acc" : 1 , "sheet14.f_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_dd_acc" : 1 , "sheet14.tot_dd_acc" : 1 , "sheet14.gi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_dd_acc" : 1 , "sheet14.tot_dd_acc" : 1 , "sheet14.mi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.ni_dd_acc" : 1 , "sheet14.tot_dd_acc" : 1 , "sheet14.ni_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.k_dd_pep" : 1 , "sheet14.tot_dd_pep" : 1 , "sheet14.k_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_dd_pep" : 1 , "sheet14.tot_dd_pep" : 1 , "sheet14.gi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_dd_pep" : 1 , "sheet14.tot_dd_pep" : 1 , "sheet14.mi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }

  if(r == "WS"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.f_driveonws_acc" : 1 , "sheet14.tot_driveonws_acc" : 1 , "sheet14.f_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_driveonws_acc" : 1 , "sheet14.tot_driveonws_acc" : 1 , "sheet14.gi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_driveonws_acc" : 1 , "sheet14.tot_driveonws_acc" : 1 , "sheet14.mi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.ni_driveonws_acc" : 1 , "sheet14.tot_driveonws_acc" : 1 , "sheet14.ni_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.k_driveonws_pep" : 1 , "sheet14.tot_driveonws_pep" : 1 , "sheet14.k_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_driveonws_pep" : 1 , "sheet14.tot_driveonws_pep" : 1 , "sheet14.gi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_driveonws_pep" : 1 , "sheet14.tot_driveonws_pep" : 1 , "sheet14.mi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }

  if(r == "RL"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.f_jrl_acc" : 1 , "sheet14.tot_jrl_acc" : 1 , "sheet14.f_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_jrl_acc" : 1 , "sheet14.tot_jrl_acc" : 1 , "sheet14.gi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_jrl_acc" : 1 , "sheet14.tot_jrl_acc" : 1 , "sheet14.mi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.ni_jrl_acc" : 1 , "sheet14.tot_jrl_acc" : 1 , "sheet14.ni_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.k_jrl_pep" : 1 , "sheet14.tot_jrl_pep" : 1 , "sheet14.k_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_jrl_pep" : 1 , "sheet14.tot_jrl_pep" : 1 , "sheet14.gi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_jrl_pep" : 1 , "sheet14.tot_jrl_pep" : 1 , "sheet14.mi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }

  if(r == "MP"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.f_mobile_acc" : 1 , "sheet14.tot_mobile_acc" : 1 , "sheet14.f_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_mobile_acc" : 1 , "sheet14.tot_mobile_acc" : 1 , "sheet14.gi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_mobile_acc" : 1 , "sheet14.tot_mobile_acc" : 1 , "sheet14.mi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.ni_mobile_acc" : 1 , "sheet14.tot_mobile_acc" : 1 , "sheet14.ni_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.k_mobile_pep" : 1 , "sheet14.tot_mobile_pep" : 1 , "sheet14.k_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_mobile_pep" : 1 , "sheet14.tot_mobile_pep" : 1 , "sheet14.gi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_mobile_pep" : 1 , "sheet14.tot_mobile_pep" : 1 , "sheet14.mi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }

  if(r == "others"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.f_others_acc" : 1 , "sheet14.tot_others_acc" : 1 , "sheet14.f_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_others_acc" : 1 , "sheet14.tot_others_acc" : 1 , "sheet14.gi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_others_acc" : 1 , "sheet14.tot_others_acc" : 1 , "sheet14.mi_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.ni_others_acc" : 1 , "sheet14.tot_others_acc" : 1 , "sheet14.ni_tot_acc"  :1 , "sheet14.tot_tot_acc" : 1}},function(err , found){
      })
    }
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.k_others_pep" : 1 , "sheet14.tot_others_pep" : 1 , "sheet14.k_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.gi_others_pep" : 1 , "sheet14.tot_others_pep" : 1 , "sheet14.gi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet14.mi_others_pep" : 1 , "sheet14.tot_others_pep" : 1 , "sheet14.mi_tot_pep"  :1 , "sheet14.tot_tot_pep" : 1}},function(err , found){
      })
    } 
  }
  res.send("Data Updated");
})
app.post("/15" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.DSD;
  var s = req.body.PSD;
  var people = req.body.people;
  if(r == "dh"){
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.k_tot_hel" : 1 , "sheet15.k_driv_hel" : 1 }},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.gi_tot_hel" : 1 , "sheet15.gi_driv_hel" : 1 }},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.mi_tot_hel" : 1 , "sheet15.mi_driv_hel" : 1 }},function(err , found){
      })
    }
  
  }
  if(r == "ds"){
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.k_tot_sb" : 1 , "sheet15.k_driv_sb" : 1 }},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.gi_tot_sb" : 1 , "sheet15.gi_driv_sb" : 1 }},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.mi_tot_sb" : 1 , "sheet15.mi_driv_sb" : 1 }},function(err , found){
      })
    }
  
  }
  if(s == "ph"){
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.k_tot_hel" : 1 , "sheet15.k_pass_hel" : 1 }},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.gi_tot_hel" : 1 , "sheet15.gi_pass_hel" : 1 }},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.mi_tot_hel" : 1 , "sheet15.mi_pass_hel" : 1 }},function(err , found){
      })
    }

  }
  if(s == "ps"){
    if(people == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.k_tot_sb" : 1 , "sheet15.k_pass_sb" : 1 }},function(err , found){
      })
    }
    if(people == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.gi_tot_sb" : 1 , "sheet15.gi_pass_sb" : 1 }},function(err , found){
      })
    }
    if(people == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet15.mi_tot_sb" : 1 , "sheet15.mi_pass_sb" : 1 }},function(err , found){
      })
    }
  }
res.send("Data Updated");
})
app.post("/16" , function(req,res){
  var year = req.body.year;
  var spot = req.body.spot;
  var r = req.body.license;
  var type = req.body.type;
  if(r == "PL"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.f_vpl" : 1 , "sheet16.tot_vpl" : 1 , "sheet16.f_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.gi_vpl" : 1 , "sheet16.tot_vpl" : 1 , "sheet16.gi_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.mi_vpl" : 1 , "sheet16.tot_vpl" : 1 , "sheet16.mi_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.ni_vpl" : 1 , "sheet16.tot_vpl" : 1 , "sheet16.ni_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }

  }
  if(r == "LL"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.f_ll" : 1 , "sheet16.tot_ll" : 1 , "sheet16.f_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.gi_ll" : 1 , "sheet16.tot_ll" : 1 , "sheet16.gi_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.mi_ll" : 1 , "sheet16.tot_ll" : 1 , "sheet16.mi_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.ni_ll" : 1 , "sheet16.tot_ll" : 1 , "sheet16.ni_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }

  }
  if(r == "WL"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.f_wl" : 1 , "sheet16.tot_wl" : 1 , "sheet16.f_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.gi_wl" : 1 , "sheet16.tot_wl" : 1 , "sheet16.gi_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.mi_wl" : 1 , "sheet16.tot_wl" : 1 , "sheet16.mi_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.ni_wl" : 1 , "sheet16.tot_wl" : 1 , "sheet16.ni_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }

  }
  if(r == "notknown"){
    if(type == 1){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.f_notk" : 1 , "sheet16.tot_notk" : 1 , "sheet16.f_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 2){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.gi_notk" : 1 , "sheet16.tot_notk" : 1 , "sheet16.gi_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 3){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.mi_notk" : 1 , "sheet16.tot_notk" : 1 , "sheet16.mi_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }
    if(type == 4){
      Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet16.ni_notk" : 1 , "sheet16.tot_notk" : 1 , "sheet16.ni_tot"  :1 , "sheet16.tot_tot" : 1}},function(err , found){
      })
    }

  }
  res.send("Data Updated")
  })
  app.post("/17" , function(req,res){
    var year = req.body.year;
    var spot = req.body.spot;
    var d = req.body.du;
    var p = req.body.pu;
    var dg = req.body.dg;
    var pg = req.body.pg;
    var people = req.body.people;
    if(d == "1"){
      if(dg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_ped_m" : 1 , "sheet17.tot_ped_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_ped_m" : 1 , "sheet17.tot_ped_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_ped_m" : 1 , "sheet17.tot_ped_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1 }},function(err , found){
          })
        }
      }
      if(dg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_ped_f" : 1 , "sheet17.tot_ped_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_ped_f" : 1 , "sheet17.tot_ped_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_ped_f" : 1 , "sheet17.tot_ped_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(d == "2"){
      if(dg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_byc_driv_m" : 1 , "sheet17.k_byc_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_byc_tot_m" : 1 , "sheet17.tot_byc_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_byc_driv_m" : 1 , "sheet17.gi_byc_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_byc_tot_m" : 1 , "sheet17.tot_byc_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_byc_driv_m" : 1 , "sheet17.mi_byc_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_byc_tot_m" : 1 , "sheet17.tot_byc_driv_m" :1 }},function(err , found){
          })
        }
      }
      if(dg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_byc_driv_f" : 1 , "sheet17.k_byc_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_byc_tot_f" : 1 , "sheet17.tot_byc_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_byc_driv_f" : 1 , "sheet17.gi_byc_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_byc_tot_f" : 1 , "sheet17.tot_byc_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_byc_driv_f" : 1 , "sheet17.mi_byc_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_byc_tot_f" : 1 , "sheet17.tot_byc_driv_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(d == "3"){
      if(dg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_2wh_driv_m" : 1 , "sheet17.k_2wh_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_2wh_tot_m" : 1 , "sheet17.tot_2wh_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_2wh_driv_m" : 1 , "sheet17.gi_2wh_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_2wh_tot_m" : 1 , "sheet17.tot_2wh_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_2wh_driv_m" : 1 , "sheet17.mi_2wh_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_2wh_tot_m" : 1 , "sheet17.tot_2wh_driv_m" :1 }},function(err , found){
          })
        }
      }
      if(dg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_2wh_driv_f" : 1 , "sheet17.k_2wh_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_2wh_tot_f" : 1 , "sheet17.tot_2wh_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_2wh_driv_f" : 1 , "sheet17.gi_2wh_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_2wh_tot_f" : 1 , "sheet17.tot_2wh_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_2wh_driv_f" : 1 , "sheet17.mi_2wh_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_2wh_tot_f" : 1 , "sheet17.tot_2wh_driv_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(d == "4"){
      if(dg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_rick_driv_m" : 1 , "sheet17.k_rick_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_rick_tot_m" : 1 , "sheet17.tot_rick_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_rick_driv_m" : 1 , "sheet17.gi_rick_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_rick_tot_m" : 1 , "sheet17.tot_rick_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_rick_driv_m" : 1 , "sheet17.mi_rick_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_rick_tot_m" : 1 , "sheet17.tot_rick_driv_m" :1 }},function(err , found){
          })
        }
      }
      if(dg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_rick_driv_f" : 1 , "sheet17.k_rick_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_rick_tot_f" : 1 , "sheet17.tot_rick_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_rick_driv_f" : 1 , "sheet17.gi_rick_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_rick_tot_f" : 1 , "sheet17.tot_rick_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_rick_driv_f" : 1 , "sheet17.mi_rick_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_rick_tot_f" : 1 , "sheet17.tot_rick_driv_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(d == "5"){
      if(dg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_4wh_driv_m" : 1 , "sheet17.k_4wh_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_4wh_tot_m" : 1 , "sheet17.tot_4wh_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_4wh_driv_m" : 1 , "sheet17.gi_4wh_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_4wh_tot_m" : 1 , "sheet17.tot_4wh_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_4wh_driv_m" : 1 , "sheet17.mi_4wh_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_4wh_tot_m" : 1 , "sheet17.tot_4wh_driv_m" :1 }},function(err , found){
          })
        }
      }
      if(dg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_4wh_driv_f" : 1 , "sheet17.k_4wh_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_4wh_tot_f" : 1 , "sheet17.tot_4wh_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_4wh_driv_f" : 1 , "sheet17.gi_4wh_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_4wh_tot_f" : 1 , "sheet17.tot_4wh_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_4wh_driv_f" : 1 , "sheet17.mi_4wh_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_4wh_tot_f" : 1 , "sheet17.tot_4wh_driv_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(d == "6"){
      if(dg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_truck_driv_m" : 1 , "sheet17.k_truck_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_truck_tot_m" : 1 , "sheet17.tot_truck_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_truck_driv_m" : 1 , "sheet17.gi_truck_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_truck_tot_m" : 1 , "sheet17.tot_truck_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_truck_driv_m" : 1 , "sheet17.mi_truck_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_truck_tot_m" : 1 , "sheet17.tot_truck_driv_m" :1 }},function(err , found){
          })
        }
      }
      if(dg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_truck_driv_f" : 1 , "sheet17.k_truck_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_truck_tot_f" : 1 , "sheet17.tot_truck_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_truck_driv_f" : 1 , "sheet17.gi_truck_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_truck_tot_f" : 1 , "sheet17.tot_truck_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_truck_driv_f" : 1 , "sheet17.mi_truck_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_truck_tot_f" : 1 , "sheet17.tot_truck_driv_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(d == "7"){
      if(dg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_bus_driv_m" : 1 , "sheet17.k_bus_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_bus_tot_m" : 1 , "sheet17.tot_bus_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_bus_driv_m" : 1 , "sheet17.gi_bus_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_bus_tot_m" : 1 , "sheet17.tot_bus_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_bus_driv_m" : 1 , "sheet17.mi_bus_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_bus_tot_m" : 1 , "sheet17.tot_bus_driv_m" :1 }},function(err , found){
          })
        }
      }
      if(dg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_bus_driv_f" : 1 , "sheet17.k_bus_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_bus_tot_f" : 1 , "sheet17.tot_bus_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_bus_driv_f" : 1 , "sheet17.gi_bus_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_bus_tot_f" : 1 , "sheet17.tot_bus_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_bus_driv_f" : 1 , "sheet17.mi_bus_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_bus_tot_f" : 1 , "sheet17.tot_bus_driv_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(d == "8"){
      if(dg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_omv_driv_m" : 1 , "sheet17.k_omv_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_omv_tot_m" : 1 , "sheet17.tot_omv_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_omv_driv_m" : 1 , "sheet17.gi_omv_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_omv_tot_m" : 1 , "sheet17.tot_omv_driv_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_omv_driv_m" : 1 , "sheet17.mi_omv_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_omv_tot_m" : 1 , "sheet17.tot_omv_driv_m" :1 }},function(err , found){
          })
        }
      }
      if(dg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_omv_driv_f" : 1 , "sheet17.k_omv_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_omv_tot_f" : 1 , "sheet17.tot_omv_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_omv_driv_f" : 1 , "sheet17.gi_omv_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_omv_tot_f" : 1 , "sheet17.tot_omv_driv_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_omv_driv_f" : 1 , "sheet17.mi_omv_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_driv_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_driv_f" :1, "sheet17.tot_omv_tot_f" : 1 , "sheet17.tot_omv_driv_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(p == "1"){
      if(pg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_byc_pass_m" : 1 , "sheet17.k_byc_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_byc_tot_m" : 1 , "sheet17.tot_byc_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_byc_pass_m" : 1 , "sheet17.gi_byc_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_byc_tot_m" : 1 , "sheet17.tot_byc_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_byc_pass_m" : 1 , "sheet17.mi_byc_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_byc_tot_m" : 1 , "sheet17.tot_byc_pass_m" :1 }},function(err , found){
          })
        }
      }
      if(pg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_byc_pass_f" : 1 , "sheet17.k_byc_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_byc_tot_f" : 1 , "sheet17.tot_byc_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_byc_pass_f" : 1 , "sheet17.gi_byc_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_byc_tot_f" : 1 , "sheet17.tot_byc_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_byc_pass_f" : 1 , "sheet17.mi_byc_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_byc_tot_f" : 1 , "sheet17.tot_byc_pass_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(p == "2"){
      if(pg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_2wh_pass_m" : 1 , "sheet17.k_2wh_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_2wh_tot_m" : 1 , "sheet17.tot_2wh_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_2wh_pass_m" : 1 , "sheet17.gi_2wh_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_2wh_tot_m" : 1 , "sheet17.tot_2wh_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_2wh_pass_m" : 1 , "sheet17.mi_2wh_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_2wh_tot_m" : 1 , "sheet17.tot_2wh_pass_m" :1 }},function(err , found){
          })
        }
      }
      if(pg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_2wh_pass_f" : 1 , "sheet17.k_2wh_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_2wh_tot_f" : 1 , "sheet17.tot_2wh_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_2wh_pass_f" : 1 , "sheet17.gi_2wh_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_2wh_tot_f" : 1 , "sheet17.tot_2wh_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_2wh_pass_f" : 1 , "sheet17.mi_2wh_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_2wh_tot_f" : 1 , "sheet17.tot_2wh_pass_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(p == "3"){
      if(pg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_rick_pass_m" : 1 , "sheet17.k_rick_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_rick_tot_m" : 1 , "sheet17.tot_rick_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_rick_pass_m" : 1 , "sheet17.gi_rick_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_rick_tot_m" : 1 , "sheet17.tot_rick_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_rick_pass_m" : 1 , "sheet17.mi_rick_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_rick_tot_m" : 1 , "sheet17.tot_rick_pass_m" :1 }},function(err , found){
          })
        }
      }
      if(pg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_rick_pass_f" : 1 , "sheet17.k_rick_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_rick_tot_f" : 1 , "sheet17.tot_rick_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_rick_pass_f" : 1 , "sheet17.gi_rick_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_rick_tot_f" : 1 , "sheet17.tot_rick_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_rick_pass_f" : 1 , "sheet17.mi_rick_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_rick_tot_f" : 1 , "sheet17.tot_rick_pass_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(p == "4"){
      if(pg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_4wh_pass_m" : 1 , "sheet17.k_4wh_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_4wh_tot_m" : 1 , "sheet17.tot_4wh_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_4wh_pass_m" : 1 , "sheet17.gi_4wh_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_4wh_tot_m" : 1 , "sheet17.tot_4wh_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_4wh_pass_m" : 1 , "sheet17.mi_4wh_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_4wh_tot_m" : 1 , "sheet17.tot_4wh_pass_m" :1 }},function(err , found){
          })
        }
      }
      if(pg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_4wh_pass_f" : 1 , "sheet17.k_4wh_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_4wh_tot_f" : 1 , "sheet17.tot_4wh_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_4wh_pass_f" : 1 , "sheet17.gi_4wh_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_4wh_tot_f" : 1 , "sheet17.tot_4wh_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_4wh_pass_f" : 1 , "sheet17.mi_4wh_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_4wh_tot_f" : 1 , "sheet17.tot_4wh_pass_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(p == "5"){
      if(pg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_truck_pass_m" : 1 , "sheet17.k_truck_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_truck_tot_m" : 1 , "sheet17.tot_truck_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_truck_pass_m" : 1 , "sheet17.gi_truck_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_truck_tot_m" : 1 , "sheet17.tot_truck_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_truck_driv_m" : 1 , "sheet17.mi_truck_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_driv_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_driv_m" :1, "sheet17.tot_truck_tot_m" : 1 , "sheet17.tot_truck_driv_m" :1 }},function(err , found){
          })
        }
      }
      if(pg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_truck_pass_f" : 1 , "sheet17.k_truck_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_truck_tot_f" : 1 , "sheet17.tot_truck_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_truck_pass_f" : 1 , "sheet17.gi_truck_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_truck_tot_f" : 1 , "sheet17.tot_truck_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_truck_pass_f" : 1 , "sheet17.mi_truck_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_truck_tot_f" : 1 , "sheet17.tot_truck_pass_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(p == "6"){
      if(pg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_bus_pass_m" : 1 , "sheet17.k_bus_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_bus_tot_m" : 1 , "sheet17.tot_bus_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_bus_pass_m" : 1 , "sheet17.gi_bus_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_bus_tot_m" : 1 , "sheet17.tot_bus_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_bus_pass_m" : 1 , "sheet17.mi_bus_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_bus_tot_m" : 1 , "sheet17.tot_bus_pass_m" :1 }},function(err , found){
          })
        }
      }
      if(pg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_bus_pass_f" : 1 , "sheet17.k_bus_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_bus_tot_f" : 1 , "sheet17.tot_bus_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_bus_pass_f" : 1 , "sheet17.gi_bus_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_bus_tot_f" : 1 , "sheet17.tot_bus_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_bus_pass_f" : 1 , "sheet17.mi_bus_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_bus_tot_f" : 1 , "sheet17.tot_bus_pass_f" :1 }},function(err , found){
          })
        }
      }
    
    }
    if(p == "7"){
      if(pg == "m"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_omv_pass_m" : 1 , "sheet17.k_omv_tot_m" : 1 , "sheet17.k_tot_tot_m" : 1 , "sheet17.k_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_omv_tot_m" : 1 , "sheet17.tot_omv_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_omv_pass_m" : 1 , "sheet17.gi_omv_tot_m" : 1 , "sheet17.gi_tot_tot_m" : 1 , "sheet17.gi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_omv_tot_m" : 1 , "sheet17.tot_omv_pass_m" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_omv_pass_m" : 1 , "sheet17.mi_omv_tot_m" : 1 , "sheet17.mi_tot_tot_m" : 1 , "sheet17.mi_tot_pass_m" : 1 , "sheet17.tot_tot_tot_m" : 1 , "sheet17.tot_tot_pass_m" :1, "sheet17.tot_omv_tot_m" : 1 , "sheet17.tot_omv_pass_m" :1 }},function(err , found){
          })
        }
      }
      if(pg == "f"){
        if(people == 1){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.k_omv_pass_f" : 1 , "sheet17.k_omv_tot_f" : 1 , "sheet17.k_tot_tot_f" : 1 , "sheet17.k_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_omv_tot_f" : 1 , "sheet17.tot_omv_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 2){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.gi_omv_pass_f" : 1 , "sheet17.gi_omv_tot_f" : 1 , "sheet17.gi_tot_tot_f" : 1 , "sheet17.gi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_omv_tot_f" : 1 , "sheet17.tot_omv_pass_f" :1 }},function(err , found){
          })
        }
        if(people == 3){
          Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet17.mi_omv_pass_f" : 1 , "sheet17.mi_omv_tot_f" : 1 , "sheet17.mi_tot_tot_f" : 1 , "sheet17.mi_tot_pass_f" : 1 , "sheet17.tot_tot_tot_f" : 1 , "sheet17.tot_tot_pass_f" :1, "sheet17.tot_omv_tot_f" : 1 , "sheet17.tot_omv_pass_f" :1 }},function(err , found){
          })
        }
      }
    
    }
res.send("Data Updated");
  })
  app.post("/18" , function(req,res){
    var year = req.body.year;
    var spot = req.body.spot;
    var vt = req.body.vt;
    var vg = req.body.vg;
    var va = req.body.va;
    var people = req.body.people;
    if(vt == "1"){
      if(vg == "m"){
        if(va == "18"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_driv" : 1 , "sheet18.k_18_m_driv" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_18_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_driv" : 1 , "sheet18.in_18_m_driv" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_18_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "1825"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_driv" : 1 , "sheet18.k_1825_m_driv" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_1825_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_driv" : 1 , "sheet18.in_1825_m_driv" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_1825_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "2535"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_driv" : 1 , "sheet18.k_2535_m_driv" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_2535_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_driv" : 1 , "sheet18.in_2535_m_driv" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_2535_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "3545"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_driv" : 1 , "sheet18.k_3545_m_driv" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_3545_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_driv" : 1 , "sheet18.in_3545_m_driv" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_3545_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "4560"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_driv" : 1 , "sheet18.k_4560_m_driv" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_4560_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_driv" : 1 , "sheet18.in_4560_m_driv" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_4560_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "60"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_driv" : 1 , "sheet18.k_60_m_driv" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_60_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_driv" : 1 , "sheet18.in_60_m_driv" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_60_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "unk"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_driv" : 1 , "sheet18.k_notk_m_driv" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_notk_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_driv" : 1 , "sheet18.in_notk_m_driv" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_notk_m_tot" : 1 }},function(err , found){
            })
          }
        }
     
      }
      if(vg == "f"){
        if(va == "18"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_driv" : 1 , "sheet18.k_18_f_driv" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_18_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_driv" : 1 , "sheet18.in_18_f_driv" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_18_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "1825"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_driv" : 1 , "sheet18.k_1825_f_driv" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_1825_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_driv" : 1 , "sheet18.in_1825_f_driv" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_1825_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "2535"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_driv" : 1 , "sheet18.k_2535_f_driv" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_2535_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_driv" : 1 , "sheet18.in_2535_f_driv" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_2535_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "3545"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_driv" : 1 , "sheet18.k_3545_f_driv" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_3545_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_driv" : 1 , "sheet18.in_3545_f_driv" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_3545_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "4560"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_driv" : 1 , "sheet18.k_4560_f_driv" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_4560_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_driv" : 1 , "sheet18.in_4560_f_driv" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_4560_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "60"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_driv" : 1 , "sheet18.k_60_f_driv" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_60_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_driv" : 1 , "sheet18.in_60_f_driv" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_60_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "unk"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_driv" : 1 , "sheet18.k_notk_f_driv" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_notk_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_driv" : 1 , "sheet18.in_notk_f_driv" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_notk_f_tot" : 1 }},function(err , found){
            })
          }
        }
     
      }
    
    }
    if(vt == "2"){
      if(vg == "m"){
        if(va == "18"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_pass" : 1 , "sheet18.k_18_m_pass" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_18_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_pass" : 1 , "sheet18.in_18_m_pass" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_18_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "1825"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_pass" : 1 , "sheet18.k_1825_m_pass" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_1825_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_pass" : 1 , "sheet18.in_1825_m_pass" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_1825_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "2535"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_pass" : 1 , "sheet18.k_2535_m_pass" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_2535_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_pass" : 1 , "sheet18.in_2535_m_pass" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_2535_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "3545"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_pass" : 1 , "sheet18.k_3545_m_pass" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_3545_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_pass" : 1 , "sheet18.in_3545_m_pass" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_3545_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "4560"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_pass" : 1 , "sheet18.k_4560_m_pass" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_4560_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_pass" : 1 , "sheet18.in_4560_m_pass" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_4560_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "60"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_pass" : 1 , "sheet18.k_60_m_pass" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_60_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_pass" : 1 , "sheet18.in_60_m_pass" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_60_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "unk"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_pass" : 1 , "sheet18.k_notk_m_pass" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_notk_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_pass" : 1 , "sheet18.in_notk_m_pass" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_notk_m_tot" : 1 }},function(err , found){
            })
          }
        }
     
      }
      if(vg == "f"){
        if(va == "18"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_pass" : 1 , "sheet18.k_18_f_pass" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_18_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_pass" : 1 , "sheet18.in_18_f_pass" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_18_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "1825"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_pass" : 1 , "sheet18.k_1825_f_pass" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_1825_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_pass" : 1 , "sheet18.in_1825_f_pass" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_1825_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "2535"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_pass" : 1 , "sheet18.k_2535_f_pass" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_2535_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_pass" : 1 , "sheet18.in_2535_f_pass" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_2535_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "3545"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_pass" : 1 , "sheet18.k_3545_f_pass" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_3545_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_pass" : 1 , "sheet18.in_3545_f_pass" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_3545_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "4560"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_pass" : 1 , "sheet18.k_4560_f_pass" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_4560_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_pass" : 1 , "sheet18.in_4560_f_pass" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_4560_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "60"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_pass" : 1 , "sheet18.k_60_f_pass" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_60_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_pass" : 1 , "sheet18.in_60_f_pass" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_60_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "unk"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_pass" : 1 , "sheet18.k_notk_f_pass" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_notk_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_pass" : 1 , "sheet18.in_notk_f_pass" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_notk_f_tot" : 1 }},function(err , found){
            })
          }
        }
     
      }
    
    }
    if(vt == "3"){
      if(vg == "m"){
        if(va == "18"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_ped" : 1 , "sheet18.k_18_m_ped" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_18_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_ped" : 1 , "sheet18.in_18_m_ped" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_18_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "1825"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_ped" : 1 , "sheet18.k_1825_m_ped" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_1825_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_ped" : 1 , "sheet18.in_1825_m_ped" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_1825_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "2535"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_ped" : 1 , "sheet18.k_2535_m_ped" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_2535_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_ped" : 1 , "sheet18.in_2535_m_ped" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_2535_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "3545"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_ped" : 1 , "sheet18.k_3545_m_ped" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_3545_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_ped" : 1 , "sheet18.in_3545_m_ped" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_3545_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "4560"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_ped" : 1 , "sheet18.k_4560_m_ped" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_4560_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_ped" : 1 , "sheet18.in_4560_m_ped" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_4560_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "60"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_ped" : 1 , "sheet18.k_60_m_ped" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_60_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_ped" : 1 , "sheet18.in_60_m_ped" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_60_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "unk"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_ped" : 1 , "sheet18.k_notk_m_ped" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_notk_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_ped" : 1 , "sheet18.in_notk_m_ped" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_notk_m_tot" : 1 }},function(err , found){
            })
          }
        }
     
      }
      if(vg == "f"){
        if(va == "18"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_ped" : 1 , "sheet18.k_18_f_ped" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_18_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_ped" : 1 , "sheet18.in_18_f_ped" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_18_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "1825"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_ped" : 1 , "sheet18.k_1825_f_ped" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_1825_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_ped" : 1 , "sheet18.in_1825_f_ped" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_1825_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "2535"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_ped" : 1 , "sheet18.k_2535_f_ped" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_2535_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_ped" : 1 , "sheet18.in_2535_f_ped" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_2535_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "3545"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_ped" : 1 , "sheet18.k_3545_f_ped" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_3545_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_ped" : 1 , "sheet18.in_3545_f_ped" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_3545_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "4560"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_ped" : 1 , "sheet18.k_4560_f_ped" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_4560_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_ped" : 1 , "sheet18.in_4560_f_ped" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_4560_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "60"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_ped" : 1 , "sheet18.k_60_f_ped" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_60_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_ped" : 1 , "sheet18.in_60_f_ped" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_60_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "unk"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_ped" : 1 , "sheet18.k_notk_f_ped" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_notk_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_ped" : 1 , "sheet18.in_notk_f_ped" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_notk_f_tot" : 1 }},function(err , found){
            })
          }
        }
     
      }
    
    }
    if(vt == "4"){
      if(vg == "m"){
        if(va == "18"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_cyc" : 1 , "sheet18.k_18_m_cyc" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_18_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_cyc" : 1 , "sheet18.in_18_m_cyc" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_18_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "1825"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_cyc" : 1 , "sheet18.k_1825_m_cyc" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_1825_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_cyc" : 1 , "sheet18.in_1825_m_cyc" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_1825_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "2535"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_cyc" : 1 , "sheet18.k_2535_m_cyc" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_2535_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_cyc" : 1 , "sheet18.in_2535_m_cyc" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_2535_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "3545"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_cyc" : 1 , "sheet18.k_3545_m_cyc" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_3545_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_cyc" : 1 , "sheet18.in_3545_m_cyc" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_3545_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "4560"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_cyc" : 1 , "sheet18.k_4560_m_cyc" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_4560_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_cyc" : 1 , "sheet18.in_4560_m_cyc" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_4560_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "60"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_cyc" : 1 , "sheet18.k_60_m_cyc" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_60_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_cyc" : 1 , "sheet18.in_60_m_cyc" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_60_m_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "unk"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_m_cyc" : 1 , "sheet18.k_notk_m_cyc" : 1 , "sheet18.k_tot_m_tot" : 1 ,"sheet18.k_notk_m_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_m_cyc" : 1 , "sheet18.in_notk_m_cyc" : 1 , "sheet18.in_tot_m_tot" : 1 ,"sheet18.in_notk_m_tot" : 1 }},function(err , found){
            })
          }
        }
     
      }
      if(vg == "f"){
        if(va == "18"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_cyc" : 1 , "sheet18.k_18_f_cyc" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_18_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_cyc" : 1 , "sheet18.in_18_f_cyc" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_18_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "1825"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_cyc" : 1 , "sheet18.k_1825_f_cyc" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_1825_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_cyc" : 1 , "sheet18.in_1825_f_cyc" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_1825_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "2535"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_cyc" : 1 , "sheet18.k_2535_f_cyc" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_2535_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_cyc" : 1 , "sheet18.in_2535_f_cyc" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_2535_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "3545"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_cyc" : 1 , "sheet18.k_3545_f_cyc" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_3545_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_cyc" : 1 , "sheet18.in_3545_f_cyc" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_3545_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "4560"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_cyc" : 1 , "sheet18.k_4560_f_cyc" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_4560_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_cyc" : 1 , "sheet18.in_4560_f_cyc" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_4560_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "60"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_cyc" : 1 , "sheet18.k_60_f_cyc" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_60_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_cyc" : 1 , "sheet18.in_60_f_cyc" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_60_f_tot" : 1 }},function(err , found){
            })
          }
        }
        if(va == "unk"){
          if(people == 1){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.k_tot_f_cyc" : 1 , "sheet18.k_notk_f_cyc" : 1 , "sheet18.k_tot_f_tot" : 1 ,"sheet18.k_notk_f_tot" : 1 }},function(err , found){
            })
          }
          if(people == 2){
            Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet18.in_tot_f_cyc" : 1 , "sheet18.in_notk_f_cyc" : 1 , "sheet18.in_tot_f_tot" : 1 ,"sheet18.in_notk_f_tot" : 1 }},function(err , found){
            })
          }
        }
     
      }
    
    }
    res.send("Data Updated");
    })
    app.post("/19" , function(req,res){
      var year = req.body.year;
      var spot = req.body.spot;
      var r = req.body.NH;
      var people = req.body.people;
      if(r == "NHAI"){
            if(people == 1){
              Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet19.tot_nh" : 1 , "sheet19.tot_tot" : 1 }},function(err , found){
              })
            }
            if(people == 2){
              Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet19.k_nh" : 1 , "sheet19.k_tot" : 1 }},function(err , found){
              })
            }

          }
          if(r == "PWD"){
            if(people == 1){
              Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet19.tot_sh" : 1 , "sheet19.tot_tot" : 1 }},function(err , found){
              })
            }
            if(people == 2){
              Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet19.k_sh" : 1 , "sheet19.k_tot" : 1 }},function(err , found){
              })
            }

          }
          if(r == "others"){
            if(people == 1){
              Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet19.tot_other" : 1 , "sheet19.tot_tot" : 1 }},function(err , found){
              })
            }
            if(people == 2){
              Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet19.k_other" : 1 , "sheet19.k_tot" : 1 }},function(err , found){
              })
            }

          }
          res.send("Data Updated");
        }
    )
    app.post("/20" , function(req,res){
      var year = req.body.year;
      var spot = req.body.spot;
      var r = req.body.NH;
      var v = req.body.v;
      var people = req.body.people;
      if(r == "NHAI"){
            if(v=="1"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.ped_acc_nh" : 1 , "sheet20.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.ped_pep_nh" : 1 , "sheet20.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="2"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bcy_acc_nh" : 1 , "sheet20.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bcy_pep_nh" : 1 , "sheet20.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="3"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.twoWH_acc_nh" : 1 , "sheet20.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.twoWH_pep_nh" : 1 , "sheet20.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="4"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.rick_acc_nh" : 1 , "sheet20.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.rick_pep_nh" : 1 , "sheet20.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="5"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.fourWH_acc_nh" : 1 , "sheet20.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.fourWH_pep_nh" : 1 , "sheet20.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="6"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.truck_acc_nh" : 1 , "sheet20.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.truck_pep_nh" : 1 , "sheet20.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="7"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bus_acc_nh" : 1 , "sheet20.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bus_pep_nh" : 1 , "sheet20.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="8"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.others_acc_nh" : 1 , "sheet20.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.others_pep_nh" : 1 , "sheet20.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
          }
          if(r == "PWD"){
            if(v=="1"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.ped_acc_sh" : 1 , "sheet20.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.ped_pep_sh" : 1 , "sheet20.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="2"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bcy_acc_sh" : 1 , "sheet20.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bcy_pep_sh" : 1 , "sheet20.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="3"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.twoWH_acc_sh" : 1 , "sheet20.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.twoWH_pep_sh" : 1 , "sheet20.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="4"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.rick_acc_sh" : 1 , "sheet20.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.rick_pep_sh" : 1 , "sheet20.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="5"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.fourWH_acc_sh" : 1 , "sheet20.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.fourWH_pep_sh" : 1 , "sheet20.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="6"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.truck_acc_sh" : 1 , "sheet20.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.truck_pep_sh" : 1 , "sheet20.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="7"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bus_acc_sh" : 1 , "sheet20.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bus_pep_sh" : 1 , "sheet20.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="8"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.others_acc_sh" : 1 , "sheet20.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.others_pep_sh" : 1 , "sheet20.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
          }
          if(r == "others"){
            if(v=="1"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.ped_acc_oth" : 1 , "sheet20.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.ped_pep_oth" : 1 , "sheet20.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="2"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bcy_acc_oth" : 1 , "sheet20.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bcy_pep_oth" : 1 , "sheet20.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="3"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.twoWH_acc_oth" : 1 , "sheet20.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.twoWH_pep_oth" : 1 , "sheet20.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="4"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.rick_acc_oth" : 1 , "sheet20.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.rick_pep_oth" : 1 , "sheet20.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="5"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.fourWH_acc_oth" : 1 , "sheet20.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.fourWH_pep_oth" : 1 , "sheet20.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="6"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.truck_acc_oth" : 1 , "sheet20.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.truck_pep_oth" : 1 , "sheet20.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="7"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bus_acc_oth" : 1 , "sheet20.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.bus_pep_oth" : 1 , "sheet20.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="8"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.others_acc_oth" : 1 , "sheet20.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet20.others_pep_oth" : 1 , "sheet20.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
          }
          res.send("Data Updated")
        }
    )
    app.post("/21" , function(req,res){
      var year = req.body.year;
      var spot = req.body.spot;
      var r = req.body.NH;
      var v = req.body.violation;
      var people = req.body.people;
      if(r == "NHAI"){
            if(v=="OS"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.os_acc_nh" : 1 , "sheet21.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.os_pep_nh" : 1 , "sheet21.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="DD"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.dd_acc_nh" : 1 , "sheet21.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.dd_pep_nh" : 1 , "sheet21.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="WS"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.driveoWS_acc_nh" : 1 , "sheet21.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.driveoWS_pep_nh" : 1 , "sheet21.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="RL"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.jrl_acc_nh" : 1 , "sheet21.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.jrl_pep_nh" : 1 , "sheet21.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="MP"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.mobile_acc_nh" : 1 , "sheet21.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.mobile_pep_nh" : 1 , "sheet21.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="others"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.others_acc_nh" : 1 , "sheet21.tot_acc_nh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.others_pep_nh" : 1 , "sheet21.tot_pep_nh" : 1 }},function(err , found){
                })
              }
            }
          }
          if(r == "PWD"){
            if(v=="OS"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.os_acc_sh" : 1 , "sheet21.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.os_pep_sh" : 1 , "sheet21.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="DD"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.dd_acc_sh" : 1 , "sheet21.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.dd_pep_sh" : 1 , "sheet21.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="WS"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.driveoWS_acc_sh" : 1 , "sheet21.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.driveoWS_pep_sh" : 1 , "sheet21.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="RL"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.jrl_acc_sh" : 1 , "sheet21.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.jrl_pep_sh" : 1 , "sheet21.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="MP"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.mobile_acc_sh" : 1 , "sheet21.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.mobile_pep_sh" : 1 , "sheet21.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
            if(v=="others"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.others_acc_sh" : 1 , "sheet21.tot_acc_sh" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.others_pep_sh" : 1 , "sheet21.tot_pep_sh" : 1 }},function(err , found){
                })
              }
            }
          }
          if(r == "others"){
            if(v=="OS"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.os_acc_oth" : 1 , "sheet21.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.os_pep_oth" : 1 , "sheet21.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="DD"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.dd_acc_oth" : 1 , "sheet21.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.dd_pep_oth" : 1 , "sheet21.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="WS"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.driveoWS_acc_oth" : 1 , "sheet21.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.driveoWS_pep_oth" : 1 , "sheet21.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="RL"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.jrl_acc_oth" : 1 , "sheet21.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.jrl_pep_oth" : 1 , "sheet21.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="MP"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.mobile_acc_oth" : 1 , "sheet21.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.mobile_pep_oth" : 1 , "sheet21.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
            if(v=="others"){
              if(people == 1){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.others_acc_oth" : 1 , "sheet21.tot_acc_oth" : 1 }},function(err , found){
                })
              }
              if(people == 2){
                Year.findOneAndUpdate({year : year , spot : spot} , {$inc : {"sheet21.others_pep_oth" : 1 , "sheet21.tot_pep_oth" : 1 }},function(err , found){
                })
              }
            }
          }
          res.send("Data Updated")
        }
    )
app.post("/BS", function (req, res) {
  let option = req.body.black;
  let spot2 = req.body.spot;
  if (option == "NH") {
    res.render("black_spot_" + spot2 + "/1");
  }
  if (option == "SH") {
    res.render("black_spot_" + spot2 + "/2");
  }
  if (option == "others") {
    res.render("black_spot_" + spot2 + "/3");
  }
});
app.listen(3000);
