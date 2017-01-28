using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DiabetesCare.Controllers
{
    public class CalculateController : Controller
    {
        // GET: Calculate
        public ActionResult CalSugar()
        {
            return View();
        }
    }
}