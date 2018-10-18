class InfosController < ApplicationController
  def index
    @infos = Info.all || []
    @categorydinfos = Categorydinfo.all || []
  end
end
