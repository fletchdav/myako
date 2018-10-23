class InfosController < ApplicationController
  def index
    @infos = Info.all || []
    @categorydinfos = Categorydinfo.all || []
    @passed_gigs = Gig.where(passed: true).sort_by { |gig| gig.date }.reverse
  end
end
