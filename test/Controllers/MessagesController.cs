using Microsoft.AspNetCore.Mvc;

namespace test.Controllers
{
    public class MessagesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
