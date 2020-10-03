﻿using System;
using System.Collections.Generic;

namespace AdminPortal.API.Data.IdentityServer
{
    public partial class ClientPostLogoutRedirectUris
    {
        public int Id { get; set; }
        public string PostLogoutRedirectUri { get; set; }
        public int ClientId { get; set; }

        public virtual Clients Client { get; set; }
    }
}
