using DatabaseAccess.Interface;
using DatabaseAccess.Repositories;
using Ninject;
using Ninject.Extensions.ChildKernel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Dependencies;
using WebApiContrib.IoC.Ninject;

namespace InsurancesAPI.Resolver
{
    public class DIResolver : IDependencyResolver
    {
        private IKernel _Kernel;

        public DIResolver() : this(new StandardKernel()) {

        }

        public DIResolver(IKernel kernel, bool scope = false)
        {
            this._Kernel = kernel;
            if (!scope) {
                AddBindings(_Kernel);
            }
        }

        public IDependencyScope BeginScope()
        {
            return new DIResolver(AddRequestBindings(new ChildKernel(_Kernel)), true);
        }

        public void Dispose()
        {            
        }

        public object GetService(Type serviceType)
        {
            return _Kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return _Kernel.GetAll(serviceType);
        }

        private void AddBindings(IKernel kernel)
        {           
        }

        private IKernel AddRequestBindings(IKernel kernel)
        {
            kernel.Bind<ICustomerRepository>().To<CustomerRepository>().InSingletonScope();
            kernel.Bind<ICustomerInsuranceRepository>().To<CustomerInsuranceRepository>().InSingletonScope();
            kernel.Bind<IInsuranceRepository>().To<InsuranceRepository>().InSingletonScope();
            return kernel;
        }
    }
}