class InfosController < ApplicationController
  def index
    @infos = Info.all || []
    @contacts = Info.where(category: 'contact')
    @collaborations = Info.where(category: 'collaboration')
    @musiques = Info.where(category: 'musique')
    @reseaux = Info.where(category: 'reseau')
    @presses = Info.where(category: 'presse')
    @gigs = Info.where(category: 'gig').sort_by{|gig| -gig.id}
  end
end
