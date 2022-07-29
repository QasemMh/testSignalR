using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace test.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string name, string message)
        {
          await  Clients.All.SendAsync("ReciveMessage",name, message);
        }

    }
}
